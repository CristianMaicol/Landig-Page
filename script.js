function carregar() {
  var data1 = new Date();
  var hora1 = data1.getHours();
  //var hoha1 = 19
  msg.innerHTML = `Agora são ${hora1} horas.`;
  if (hora1 >= 0 && hora1 < 12) {
    document.body.style.background = `#ffffff`;
  } else if (hora1 >= 12 && hora1 < 18) {
    document.body.style.background = `#046582`;
  } else {
    document.body.style.background = `#0A1931`;
  }
}
function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gênero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "menino-redondo.png");
      } else if (idade < 25) {
        img.setAttribute("src", "homem-novo-redondo-pegueno.png");
      } else if (idade < 50) {
        img.setAttribute("src", "homem-adulto.png");
      } else {
        img.setAttribute("src", "homem-velho-redondo-pegueno.png");
      }
    } else if (fsex[1].checked) {
      gênero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "menina-redondo.png");
      } else if (idade < 25) {
        img.setAttribute("src", "mulher-nova-redonda-peguena.png");
      } else if (idade < 50) {
        img.setAttribute("src", "mulher-adulta.png");
      } else {
        img.setAttribute("src", "mulher-velha-redonda-peguena.png");
      }
    }
    res.innerHTML = `${gênero} com ${idade} anos. `;
    res.appendChild(img);
  }
  var tn1 = document.getElementById("txtano1");
  var res1 = document.getElementById("res1");
  var nomp = tn1.value;
  res1.innerHTML = "nome: ";
  res1.innerHTML += nomp;
  if (nomp.length == 0) {
    window.alert("Verifique os dados e tente novamente");
  }
  var tn2 = document.getElementById("txtano2");
  var res2 = document.getElementById("res2");
  var nomp1 = tn2.value;
  res2.innerHTML = "numero: ";
  res2.innerHTML += nomp1;

  var tn3 = document.getElementById("txtano3");
  var res3 = document.getElementById("res3");
  var nomp2 = tn3.value;
  res3.innerHTML = "E-mail: ";
  res3.innerHTML += nomp2;

  var tn4 = document.getElementById("txtano4");
  var res4 = document.getElementById("res4");
  var nomp3 = tn4.value;
  res4.innerHTML = "Gargo: ";
  res4.innerHTML += nomp3;

  var tn5 = document.getElementById("txtano5");
  var res5 = document.getElementById("res5");
  var nomp4 = tn5.value;
  res5.innerHTML = "Localização: ";
  res5.innerHTML += nomp4;

  var tn6 = document.getElementById("txtano6");
  var res6 = document.getElementById("res6");
  var nomp5 = tn6.value;
  res6.innerHTML = "Escritório: ";
  res6.innerHTML += nomp5;

  var tn7 = document.getElementById("txtano7");
  var res7 = document.getElementById("res7");
  var nomp6 = tn7.value;
  res7.innerHTML = "Data de agendamento: ";
  res7.innerHTML += nomp6;
}