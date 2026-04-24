import type { APIRoute } from "astro";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-01-27.acacia",
});

const endpointSecret = import.meta.env.STRIPE_WEBHOOK_SECRET;

/**
 * Stripe webhook handler
 * Listens for checkout.session.completed events
 */
export const POST: APIRoute = async ({ request }) => {
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const body = await request.text();
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Webhook signature verification failed";
    console.error("⚠️  Webhook signature verification failed:", message);
    return new Response(`Webhook Error: ${message}`, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      console.log("✅ Payment successful:", {
        id: session.id,
        customer_email: session.customer_details?.email,
        amount_total: session.amount_total,
      });

      // Send confirmation email to customer
      await sendCustomerEmail(session);

      // Notify sir
      await sendOwnerNotification(session);

      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

/**
 * Send a confirmation email to the customer
 */
async function sendCustomerEmail(session: Stripe.Checkout.Session) {
  const email = session.customer_details?.email;
  if (!email) return;

  const tierName = getTierName(session.amount_total || 0);

  // TODO: Replace with actual email service (SendGrid, Resend, etc.)
  console.log("📧 Would send customer email to:", email, {
    subject: `Welcome to Nova Nexus Texas — ${tierName} Package Confirmed`,
    body: `Hi there,

Thanks for choosing Nova Nexus Texas! We've received your ${tierName} package payment.

Next steps:
1. We'll reach out within 24 hours to schedule your discovery call
2. You'll receive a project brief form to fill out
3. We'll kick off your website build

Questions? Reply to this email or call Lupe directly at [phone].

— Lupe Martinez
Nova Nexus Texas
https://novanexustexas.com`,
  });
}

/**
 * Notify sir of a new payment
 */
async function sendOwnerNotification(session: Stripe.Checkout.Session) {
  const email = session.customer_details?.email;
  const name = session.customer_details?.name || "Unknown";
  const amount = ((session.amount_total || 0) / 100).toFixed(2);
  const tierName = getTierName(session.amount_total || 0);

  // TODO: Replace with actual notification (email, SMS, Discord, etc.)
  console.log("🔔 Would notify sir:", {
    subject: `💰 New ${tierName} sale — ${name}`,
    body: `Customer: ${name}
Email: ${email}
Package: ${tierName}
Amount: $${amount}

Stripe session: ${session.id}
Payment status: ${session.payment_status}

Action required: Reach out within 24h to schedule discovery call.`,
  });
}

/**
 * Map Stripe amount to tier name
 */
function getTierName(amountCents: number): string {
  const amountDollars = amountCents / 100;

  if (amountDollars >= 2400) return "Ambassador";
  if (amountDollars >= 1100) return "Community Focus";
  return "Starter";
}
