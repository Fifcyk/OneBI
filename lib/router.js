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
    this.route('uslugi', {path: '/uslugi'});
    this.route('partnerzy', {path: '/partnerzy'});
    this.route('praca', {path: '/praca'});
    this.route('kontakt', {path: '/kontakt'});
});