var Vigenere = {
  _strCpr: 'abcdefghijklmnopqrstuvwxyz_12345 67890.ABCDEFGHIJKLMNOPQRSTUVWXYZ',//可以将此字符串的顺序打乱点，或者添加更多字符
  _strKey: function (strK, str) {//生成密钥字符串,strK为密钥，str为明文或者密文
    var lenStrK = strK.length;
    var lenStr = str.length;
    if (lenStrK != lenStr) {//如果密钥长度与str不同，则需要生成密钥字符串
      if (lenStrK < lenStr) {//如果密钥长度比str短，则以不断重复密钥的方式生成密钥字符串
        while (lenStrK < lenStr) {
          strK = strK + strK;
          lenStrK = 2 * lenStrK;
        }
      }//此时，密钥字符串的长度大于或等于str长度
      strK = strK.substring(0, lenStr);//将密钥字符串截取为与str等长的字符串
    }
    return strK;
  }
}
Vigenere.lenCpr = Vigenere._strCpr.length;

/**
 * @return {string}
 */
function Encrypt(P,K) {//加密算法，K为密钥，P为明文
  K = Vigenere._strKey(K, P);
  var lenK = K.length;
  var rlt = '';
  var loop = 0;
  for (loop = 0; loop < lenK; loop++) {
    var iP = Vigenere._strCpr.indexOf(P.charAt(loop));
    if (iP == -1) return '本算法暂时不能对字符：' + P.charAt(loop) + '进行加密';
    var iK = Vigenere._strCpr.indexOf(K.charAt(loop));
    if (iK == -1) return '密钥中包含非法字符：' + K.charAt(loop);
    var i = (iP + iK) % Vigenere.lenCpr;
    rlt = rlt + Vigenere._strCpr.charAt(i);
  }
  return rlt;
}

function DisEncrypt(C,K) {
  K = Vigenere._strKey(K, C);
  var lenK = K.length;
  var rlt = '';
  var loop = 0;
  for (loop = 0; loop < lenK; loop++) {
    var iK = Vigenere._strCpr.indexOf(K.charAt(loop));
    if (iK == -1) return '密钥中包含非法字符：' + K.charAt(loop);
    var iC = Vigenere._strCpr.indexOf(C.charAt(loop));
    if (iK > iC) {
      rlt += Vigenere._strCpr.charAt(iC + Vigenere.lenCpr - iK);
    }
    else {
      rlt += Vigenere._strCpr.charAt(iC - iK);
    }
  }
  return rlt;
}


export default {
  Encrypt,
  DisEncrypt
}
