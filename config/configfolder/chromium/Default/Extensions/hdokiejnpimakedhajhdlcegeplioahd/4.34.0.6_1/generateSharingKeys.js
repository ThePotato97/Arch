var generateSharingKeysFromVault=function(){"use strict";function a(a){var e=new RSAKey;generate_key(e,function(e){r(e,a)})}function r(e,r){e||r("RSA generation failed."),g_local_key&&g_local_key&&base_url&&LPServer||r("Global dependencies missing.");var a=null!=document.getElementById("newvault"),n=encode_public_key(e),t=encode_private_key(e),l=rsa_encrypt_privatekey(t,g_local_key);l=l.toUpperCase();var o={};o.privatekeyenc=l,o.publickey=n,o.userkeyhexhash=SHA256(AES.bin2hex(g_local_key)),o.privatekeyenchexhash=SHA256(l),o.token=a?decodeURIComponent(g_token):g_token,o.from=a?"webvault":"vault",o.method=get_method(),"undefined"!=typeof lpversion&&(o.lpversion=lpversion);var i=a?base_url+"uploadrsakeys_website.php":base_url+"uploadrsakeys.php",p=function(e,a){lp_rsaprivatekeyenchex=l,lp_rsaprivatekeyhex=lp_rsaprivatekeyenchex&&rsa_extract_privatekey(lp_rsaprivatekeyenchex,g_local_key)||"",r(!1)},s=function(e,a){r(e)};LPServer.ajax({type:"POST",url:i,data:o,success:p,error:s})}return function(e){a(e)}}();
//# sourceMappingURL=sourcemaps/generateSharingKeys.js.map