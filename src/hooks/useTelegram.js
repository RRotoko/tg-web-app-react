const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
          tg.close();
      };

    const onToggleButton = () => {
        if(tg.MainButton.isVisibler) {
            tg.MainButton.hise();
        }else{
            tg.MainButton.show();
        }

    }  

    return{
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}