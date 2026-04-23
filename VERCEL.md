# Vercel deployment state

**Project:** `nova-nexus-texas`
**Team/account:** `mrlupemartinezjr-8942s-projects` (Hobby)
**Project ID:** `prj_oecSSbJjMMGCoNvj4Ry6GpyT2pG6`

## Live URLs
- **Production alias:** https://nova-nexus-texas.vercel.app
- **Latest deploy:** https://nova-nexus-texas-iktiownar-mrlupemartinezjr-8942s-projects.vercel.app

## Custom domains attached (awaiting DNS)
- `novanexustexas.com` (apex, primary)
- `www.novanexustexas.com` → 308 redirect to apex

Both attached to the project; both reported `misconfigured: true` until DNS at GoDaddy points at Vercel.

## DNS records to set at GoDaddy

In GoDaddy → My Products → DNS for `novanexustexas.com`:

### Apex (novanexustexas.com)
| Type | Name | Value           | TTL   |
| ---- | ---- | --------------- | ----- |
| `A`  | `@`  | `216.198.79.1`  | 600s  |
| `A`  | `@`  | `64.29.17.1`    | 600s  |

> Vercel's preferred apex IPs (two-record anycast). If your DNS host only allows a single A record, use `76.76.21.21` instead.

### www (redirects to apex)
| Type    | Name  | Value                    | TTL   |
| ------- | ----- | ------------------------ | ----- |
| `CNAME` | `www` | `cname.vercel-dns.com.`  | 600s  |

### Remove these stale records first
The domain currently resolves to **76.223.105.230** and **13.248.243.5** (GoDaddy Website Builder legacy hosts). Delete those A records before adding the Vercel ones.

## GitHub auto-deploy (optional, set up later)

Currently the repo and Vercel project are NOT linked — deploys happen via the Vercel CLI manually. To wire up auto-deploy on every `git push`:

1. In Vercel: Project → **Settings → Git** → "Connect Git Repository"
2. Install the "Vercel" GitHub App on `lmartinez1980` (`https://github.com/apps/vercel`)
3. Pick `lmartinez1980/nova-nexus-texas` → Connect
4. Future commits to `main` will auto-deploy.

Until then: manual deploy from this folder with `vercel --prod`.

## To re-deploy manually
```bash
cd /home/ubuntu/.openclaw/workspace/projects/nova-nexus-texas
export VERCEL_TOKEN='<sir's token>'
vercel --prod --token="$VERCEL_TOKEN" --yes
```
