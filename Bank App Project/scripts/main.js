function openMyAccount() {
    location.href = '../pages/myaccount.html';
}

function submitClicked(form) {

    // Validation Checks

    if (form.customerNum.value == '' || form.pin.value == '') {
        alert('Parameters for your login were ignored!');
        location.reload();
        return;
    }

    else if (form.customerNum.value.length < 16) {
        alert('Your customer number is not a valid Orca customer number!');
        location.reload();
        return;
    }

    else if (form.roboCheck.value != 'google') {
        alert('You are a robot.');
        location.reload();
        return;
    }

    // If success

    else {
        alert('Success!')
        openMyAccount();
        console.log('opened window')
    }
}