function genpassword(){
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const passwordlength = 8
    let password = ''
    // let randomNumber = Math.floor(Math.random() * chars.length)
    // console.log(randomNumber)
    // let ceksubstring = chars.substring(0,1)
    // console.log(ceksubstring)
    for(let i = 0; i < passwordlength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber+1)
    }
    document.getElementById('password').value = password
}

function copypassword(){
    const copyText = document.getElementById('password')
    copyText.select()
    copyText.setSelectionRange(0, 999)
    document.execCommand('copy')
    alert('password berhasil di salin')
}