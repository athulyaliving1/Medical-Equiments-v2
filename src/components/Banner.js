import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

function Banner() {
  return (
    <div>
      <div>
        <img
          className="hidden w-full h-full pt-10 bg-cover md:block md:pt-16 lg:pt-20 "
          src="https://athulyahomecare.com/lp/medical-equipments/assets/medicalequipmentbanner.webp"
          alt="banner "
        />
        <div className="mt-10 lg:mt-0">
          <img
            className="block w-full h-full md:pt-12 md:hidden "
            src="https://athulyahomecare.com/lp/medical-equipments/assets/bannermb.jpg"
            alt="banner "
          />
        </div>
      </div>
      <div className="absolute">
        <WhatsAppWidget
          phoneNo="919884639400"
          position="left"
          widgetWidth="300px"
          widgetWidthMobile="260px"
          autoOpen={true}
          autoOpenTimer={5000}
          messageBox={true}
          // messageBoxTxt="Hi Team, is there any related service available ?"
          iconSize="60"
          iconColor="white"
          iconBgColor="#25D366"
          headerIcon="https://athulyahomecare.com/lp/images/care.png"
          headerIconColor="pink"
          headerTxtColor="White"
          headerBgColor="#095E53"
          headerTitle="Athulya Homecare"
          headerCaption="Online"
          bodyBgColor=""
          chatPersonName="Support"
          chatMessage={
            <>
              Hi there 👋 <br />
              <br /> How can I help you?
            </>
          }
          footerBgColor=""
          btnBgColor="#14C656"
          btnTxtColor="white"
          btnTxt={
            <>
              <ion-icon name="send-sharp"></ion-icon>
              Start Chat
            </>
          }
        />
      </div>
      <div></div>
    </div>
  );
}

export default Banner;
