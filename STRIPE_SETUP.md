# Stripe Webhook Setup

The webhook handler is built and ready. Now we need to wire it up to Stripe.

## 1. Get your Stripe credentials

Go to https://dashboard.stripe.com/apikeys

- Copy your **Secret key** (starts with `sk_live_...` for production, `sk_test_...` for testing)
- Save it — you'll need it in step 3

## 2. Create a webhook endpoint in Stripe

1. Go to https://dashboard.stripe.com/webhooks
2. Click **Add endpoint**
3. Set the endpoint URL:
   - **Production:** `https://novanexustexas.com/api/webhooks/stripe`
   - **Test (optional):** `https://nova-nexus-texas.vercel.app/api/webhooks/stripe`
4. Under **Events to send**, select:
   - `checkout.session.completed`
5. Click **Add endpoint**
6. On the endpoint detail page, click **Reveal signing secret**
7. Copy the webhook secret (starts with `whsec_...`)

## 3. Add environment variables to Vercel

In your Vercel project dashboard (https://vercel.com/mrlupemartinezjr-8942s-projects/nova-nexus-texas):

1. Go to **Settings → Environment Variables**
2. Add these two variables:
   - `STRIPE_SECRET_KEY` = `sk_live_...` (from step 1)
   - `STRIPE_WEBHOOK_SECRET` = `whsec_...` (from step 2)
3. Make sure both are set to **Production** and **Preview** environments
4. Click **Save**

## 4. Redeploy the site

From this directory:

```bash
vercel --prod
```

Or if you've connected GitHub auto-deploy, just push:

```bash
git add .
git commit -m "Add Stripe webhook handler"
git push
```

## 5. Test the webhook

1. Go back to https://dashboard.stripe.com/webhooks
2. Click on your endpoint
3. Click **Send test webhook**
4. Select `checkout.session.completed`
5. Click **Send test webhook**
6. Check the **Response** tab — should show `200 OK` and `{"received":true}`

## What happens when someone pays

1. Customer completes checkout on https://novanexustexas.com/pricing
2. Stripe fires `checkout.session.completed` event
3. Our webhook handler receives it at `/api/webhooks/stripe`
4. Handler logs the payment details (console.log for now)
5. Handler sends confirmation email to customer (TODO: wire up real email service)
6. Handler notifies you (TODO: wire up email/SMS/Discord)

## Next steps (optional improvements)

- **Email service:** Add Resend or SendGrid to actually send customer confirmation emails
- **CRM integration:** Auto-create a project in Notion, Trello, or ClickUp
- **Calendar booking:** Auto-trigger a Calendly link in the confirmation email
- **Slack/Discord notification:** Ping you immediately when a sale comes in

For now, the webhook is live and will log everything to Vercel's function logs. You can view logs at:
https://vercel.com/mrlupemartinezjr-8942s-projects/nova-nexus-texas/logs

---

**Status:** Handler is built. Environment variables need to be set in Vercel. Webhook endpoint needs to be created in Stripe dashboard.
