const { execSync } = require('child_process');

const cmds = [
  'npx vercel env add NEXT_PUBLIC_SUPABASE_URL preview --value https://grhfagdrsqdlhbxyqnzz.supabase.co --yes --force',
  'npx vercel env add NEXT_PUBLIC_SUPABASE_URL development --value https://grhfagdrsqdlhbxyqnzz.supabase.co --yes --force',
  'npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production --value eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyaGZhZ2Ryc3FkbGhieHlxbnp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODcwMDMsImV4cCI6MjA5Njc2MzAwM30.63Iq47ZBFQkgBtnNyU1nan8SBP_AyDJA6t8DAHd-bJ4 --yes --force',
  'npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY preview --value eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyaGZhZ2Ryc3FkbGhieHlxbnp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODcwMDMsImV4cCI6MjA5Njc2MzAwM30.63Iq47ZBFQkgBtnNyU1nan8SBP_AyDJA6t8DAHd-bJ4 --yes --force',
  'npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY development --value eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyaGZhZ2Ryc3FkbGhieHlxbnp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODcwMDMsImV4cCI6MjA5Njc2MzAwM30.63Iq47ZBFQkgBtnNyU1nan8SBP_AyDJA6t8DAHd-bJ4 --yes --force'
];

for(const cmd of cmds) {
  try {
    console.log(`\n=================================\nRunning: ${cmd.split('--value')[0]}`);
    execSync(cmd, { stdio: 'inherit' });
  } catch (e) {
    console.error(e);
  }
}
