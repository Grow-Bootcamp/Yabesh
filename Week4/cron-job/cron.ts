import cron from 'node-cron';

cron.schedule("*/5 * * * * *", () => {
  const now = new Date();
  console.log("CRON Job Executed: ", now.toString());
});