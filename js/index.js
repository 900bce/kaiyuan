
const targetDateOfMonth = 10; // 每月10号
const targetHourOfMonth = 17; // 17:00

const monthlyTimer = setInterval(() => {
  const yearNow = moment().year();
  const monthNow = moment().month();
  let targetMonth = monthNow;
  if (moment().date() > targetDateOfMonth || (moment().date() == targetDateOfMonth && moment().hour() >= targetHourOfMonth)) {
    targetMonth += 1;
  }
  const targetTime = moment([0, 0, targetDateOfMonth]).year(yearNow).month(targetMonth).hour(targetHourOfMonth).utc().utcOffset(480);
  const now = moment.utc().utcOffset(480);
  const distance = targetTime - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  hours < 10 ? hours = '0' + hours : null;
  minutes < 10 ? minutes = '0' + minutes : null;
  seconds < 10 ? seconds = '0' + seconds : null;

  document.querySelector('.days-of-month').textContent = days;
  document.querySelector('.hours-of-month').textContent = hours;
  document.querySelector('.minutes-of-month').textContent = minutes;
  document.querySelector('.seconds-of-month').textContent = seconds;

  if (distance < 0) {
    clearInterval(monthlyTimer);
  }
}, 1000)


const targetDayOfWeek = 3;   // 每周三
const targetHourOfWeek = 15; // 15:00

const weeklyTimer = setInterval(() => {
  let targetWeekOfYear = moment().week()
  if (moment().day() > targetDayOfWeek || (moment().day() == targetDayOfWeek && moment().hour() >= targetHourOfWeek)) {
    targetWeekOfYear += 1;
  }
  const now = moment.utc().utcOffset(480);
  const targetTime = moment({ m: 0, s: 0, ms: 0 }).week(targetWeekOfYear).day(targetDayOfWeek).hour(targetHourOfWeek).utc().utcOffset(480);
  const distance = targetTime - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  hours < 10 ? hours = '0' + hours : null;
  minutes < 10 ? minutes = '0' + minutes : null;
  seconds < 10 ? seconds = '0' + seconds : null;

  document.querySelector('.days-of-week').textContent = days;
  document.querySelector('.hours-of-week').textContent = hours;
  document.querySelector('.minutes-of-week').textContent = minutes;
  document.querySelector('.seconds-of-week').textContent = seconds;

  if (distance < 0) {
    clearInterval(weeklyTimer);
  }
}, 1000)

const closeSetup = () => {
  document.querySelector('.ios-setup').style.display = 'none';
  document.querySelector('.container').style.position = 'static'
  document.querySelector('.container').style.overflow = 'visible';
}

const openSetup = () => {
  document.querySelector('.ios-setup').style.display = 'block';
  document.querySelector('.container').style.position = 'fixed';
  document.querySelector('.container').style.overflow = 'hidden';
}

const closeSalary = () => {
  document.querySelector('.salary').style.display = 'none';
  document.querySelector('.container').style.position = 'static';
  document.querySelector('.container').style.overflow = 'visible';
}

const openSalary = () => {
  document.querySelector('.salary').style.display = 'block';
  document.querySelector('.container').style.position = 'fixed';
  document.querySelector('.container').style.overflow = 'hidden';
}

document.querySelectorAll('.link-ms').forEach(item => {
  item.textContent = Math.floor(Math.random() * 5) + 1 + 'ms';
})