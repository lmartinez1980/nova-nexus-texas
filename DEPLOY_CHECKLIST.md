# Deployment & Stripe Webhook Checklist

## ✅ Done
- [x] Stripe checkout links created and wired into pricing page
- [x] Webhook handler built (`/api/webhooks/stripe`)
- [x] Handler verifies Stripe signatures
- [x] Handler logs payment events
- [x] `.env.example` created with required variables
- [x] Code committed to Git

## 🔲 To do (sir's action required)

### 1. Set Stripe environment variables in Vercel

**Where:** https://vercel.com/mrlupemartinezjr-8942s-projects/nova-nexus-texas/settings/environment-variables

**Add these two:**
- `STRIPE_SECRET_KEY` = `sk_live_...` (from https://dashboard.stripe.com/apikeys)
- `STRIPE_WEBHOOK_SECRET` = `whsec_...` (from step 2 below)

**Environments:** Production + Preview

### 2. Create webhook endpoint in Stripe

**Where:** https://dashboard.stripe.com/webhooks

**Steps:**
1. Click **Add endpoint**
2. URL: `https://novanexustexas.com/api/webhooks/stripe`
3. Events to send: `checkout.session.completed`
4. Click **Add endpoint**
5. Copy the **Signing secret** (starts with `whsec_...`)
6. Paste it into Vercel as `STRIPE_WEBHOOK_SECRET` (step 1 above)

### 3. Redeploy the site

From this directory:
```bash
vercel --prod
```

Or if GitHub auto-deploy is connected:
```bash
git push
```

### 4. Test the webhook

**Where:** https://dashboard.stripe.com/webhooks → your endpoint → **Send test webhook**

**Expected result:**
- Status: `200 OK`
- Response: `{"received":true}`

**Check logs:** https://vercel.com/mrlupemartinezjr-8942s-projects/nova-nexus-texas/logs

## What happens when a customer pays

1. Customer clicks a "Start with..." button on `/pricing`
2. Stripe Checkout opens → customer enters payment info
3. Payment completes → Stripe fires `checkout.session.completed` webhook
4. Our handler receives it, verifies signature, logs details
5. (Future) Handler sends confirmation email to customer
6. (Future) Handler notifies you (email/SMS/Discord)

## Future improvements (can wait)

- [ ] Wire up real email service (Resend, SendGrid, etc.)
- [ ] Auto-create project in CRM (Notion, Trello, ClickUp)
- [ ] Auto-send Calendly link for discovery call
- [ ] Slack or Discord notification on new sale

---

**Current status:** Code is ready. Needs Vercel env vars + Stripe webhook endpoint setup.

**Estimated time:** 5-10 minutes once you have your Stripe dashboard open.

**Reference:** See `STRIPE_SETUP.md` for detailed step-by-step walkthrough.
