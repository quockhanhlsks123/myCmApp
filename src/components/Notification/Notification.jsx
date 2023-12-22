import '../Notification/Notification.css'
import notificationIcon from '../../assets/NotificationIcon.svg'
import { useState } from 'react'
function Notification() {

    const [urlImg, setUrlImg] = useState(localStorage.getItem('image'))

    return (

        <div className='Noti'>


            <div className='container'>
                <img src={notificationIcon} />
                <div className='user-img'><img src={urlImg} /></div>
            </div>

        </div >
    )
}

export default Notification