
const enddate = "31 December 2023 11:59:59 PM";
document.getElementById('end-date').innerHTML = enddate;
const remainning_time = document.querySelectorAll('input');
function clock() {
    const edate = new Date(enddate);
    const now = new Date();
    const diff = (edate - now) / 1000;  
    // console.log(enddate);
    // console.log(edate);
    // console.log(now);
    // console.log(diff);

    if (diff < 0) {
        return;
    }

    //Convert to days
    remainning_time[0].value = Math.floor(diff / 3600 / 24);

    // convert to hours
    remainning_time[1].value = Math.floor((diff / 3600) % 24);

    // convert to remaining minutes
    remainning_time[2].value = Math.floor((diff / 60) % (60));

    // convert to remaining seconds
    remainning_time[3].value = Math.floor(diff % (60));

}
// initial call
clock();

setInterval(() => {
    clock();
}, 1000);

