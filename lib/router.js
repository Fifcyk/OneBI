/**
 * Created by Fifcyk on 24.02.15.
 */
Router.configure({
    layoutTemplate: 'layout'

});



Router.map(function() {
   // this.route('stronaGlowna', {path: '/'});


    this.route('naszePodejscie', {path: '/'});
    this.route('aktualnosci', {path: '/aktualnosci'});
    this.route('partnerzy', {path: '/partnerzy'});
    this.route('praca', {path: '/praca'});
    this.route('kontakt', {path: '/kontakt'});

    this.route('uslugiPrzemysl', {path: '/uslugi/przemysl'});
    this.route('uslugiTransport', {path: '/uslugi/transport'});
    this.route('uslugiAdministracja', {path: '/uslugi/administracja'});
    this.route('uslugiTelekomunikacja', {path: '/uslugi/telekomunikacja'});
    this.route('uslugiMedia', {path: '/uslugi/media'});
    this.route('uslugiZdrowie', {path: '/uslugi/zdrowie'});
});