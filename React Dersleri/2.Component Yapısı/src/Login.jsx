import React from 'react'

function Login() {
    return (
        // <></> Bu işarete fragent denir. Birden fazla componenti import etmek için kullanılır.
        <>
            <div>
                <div> <p>Kullanıcı Adınız</p>
                    <input type="text" />
                </div>
                <div> <p>Şifreniz </p>
                    <input type="text" />
                </div>
                <div> <button>Giriş Yap</button></div>

            </div>

        </>

    )
}

export default Login