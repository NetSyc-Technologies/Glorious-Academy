# Glorious Academy — Launch Checklist & Handoff Notes

### 1. Pre-Launch Technical Verification
- [x] Next.js App Router static/server rendering verified
- [x] Responsive layout tested for mobile (360px, 390px), tablet (768px), and desktop (1240px+)
- [x] Light theme consistency preserved across all routes
- [x] Skip-to-content and keyboard navigation verified
- [x] Admissions form validation & rate limiting tested
- [x] Durable storage adapter writing to local storage with Reference IDs (`GA-2026-XXXXX`)
- [x] Legacy redirect routes configured in `next.config.ts`
- [x] Dynamic sitemap and robots.txt configured
- [x] Error 404 page configured with navigation links

### 2. Live Deployment Steps
1. **Domain Setup**:
   - Point canonical domain DNS (`gloriousacademy.co.in`) to deployment hosting (e.g., Vercel, Node server, or VPS).
2. **Environment Variables**:
   - Set `NEXT_PUBLIC_SITE_URL` to production URL.
   - Set `ACADEMY_NOTIFY_EMAIL` to destination staff email.
   - Set SMTP variables if using external transactional mailer.
3. **Build & Start**:
   ```bash
   npm run build
   npm run start
   ```
