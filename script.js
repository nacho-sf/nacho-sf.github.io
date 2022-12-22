window.onload = function() {introAnimation()}

function introAnimation() {
  document.getElementById('init-tit1').style.opacity = '1';
  document.getElementById('init-tit1').style.bottom = '0';
  document.getElementById('init-tit1').innerText = '<Bienvenid@, soy>';
  document.getElementById('init-tit2').style.opacity = '1';
  document.getElementById('init-tit2').style.right = '0';
  document.getElementById('init-tit3').style.opacity = '1';
  document.getElementById('init-tit3').style.left = '0';
  document.getElementById('init-tit4-1').style.opacity = '1';
  document.getElementById('init-tit4-2').style.opacity = '1';
  document.getElementById('init-tit4-3').style.opacity = '1';
  document.getElementById('init-tit4-4').style.opacity = '1';
  document.getElementById('init-tit4-1').innerText = '<p';
  document.getElementById('init-tit4-2').innerText = 'class=';
  document.getElementById('init-tit4-3').innerText = '"relevant"';
  document.getElementById('init-tit4-4').innerText = '>';
  document.getElementById('init-tit5').style.opacity = '1';
  document.getElementById('init-tit5').style.top = '0';
  document.getElementById('init-tit6').style.opacity = '1';
  document.getElementById('init-tit6').style.top = '0';
  document.getElementById('init-tit6').innerText = '</p>';
}



window.onscroll = function() {
  scroll10Function();
  scroll800Function();
  scroll400Function();
  scroll1500Function()
};

function scroll10Function() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("header").style.boxShadow = "0 2px 5px #000000";
    document.getElementById("footer").style.bottom = "0";
    document.getElementById("numbers").style.left = "0";
  } else {
    document.getElementById("header").style.boxShadow = "none";
    document.getElementById("footer").style.bottom = "-120px";
    document.getElementById("numbers").style.left = "-60px";
  }
}

function scroll800Function() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById('init-tit1').style.opacity = '0';
    document.getElementById('init-tit1').style.bottom = '150px';
    document.getElementById('init-tit1').innerText = '';
    document.getElementById('init-tit2').style.opacity = '0';
    document.getElementById('init-tit2').style.right = '300px';
    document.getElementById('init-tit3').style.opacity = '0';
    document.getElementById('init-tit3').style.left = '300px';
    document.getElementById('init-tit4-1').style.opacity = '0';
    document.getElementById('init-tit4-2').style.opacity = '0';
    document.getElementById('init-tit4-3').style.opacity = '0';
    document.getElementById('init-tit4-4').style.opacity = '0';
    document.getElementById('init-tit4-1').innerText = '<p';
    document.getElementById('init-tit4-2').innerText = 'class=';
    document.getElementById('init-tit4-3').innerText = '"relevant"';
    document.getElementById('init-tit4-4').innerText = '>';
    document.getElementById('init-tit5').style.opacity = '0';
    document.getElementById('init-tit5').style.top = '300px';
    document.getElementById('init-tit6').style.opacity = '0';
    document.getElementById('init-tit6').style.top = '300px';
    document.getElementById('init-tit6').innerText = '</p>';
  } else {
    document.getElementById('init-tit1').style.opacity = '1';
    document.getElementById('init-tit1').style.bottom = '0';
    document.getElementById('init-tit1').innerText = '<Bienvenid@, soy>';
    document.getElementById('init-tit2').style.opacity = '1';
    document.getElementById('init-tit2').style.right = '0';
    document.getElementById('init-tit3').style.opacity = '1';
    document.getElementById('init-tit3').style.left = '0';
    document.getElementById('init-tit4-1').style.opacity = '1';
    document.getElementById('init-tit4-2').style.opacity = '1';
    document.getElementById('init-tit4-3').style.opacity = '1';
    document.getElementById('init-tit4-4').style.opacity = '1';
    document.getElementById('init-tit4-1').innerText = '<p';
    document.getElementById('init-tit4-2').innerText = 'class=';
    document.getElementById('init-tit4-3').innerText = '"relevant"';
    document.getElementById('init-tit4-4').innerText = '>';
    document.getElementById('init-tit5').style.opacity = '1';
    document.getElementById('init-tit5').style.top = '0';
    document.getElementById('init-tit6').style.opacity = '1';
    document.getElementById('init-tit6').style.top = '0';
    document.getElementById('init-tit6').innerText = '</p>';
  }
}


function scroll400Function() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById('sm-p1').style.opacity = '1';
    document.getElementById('sm-p1').style.right = '0';
    document.getElementById('sm-p2').style.opacity = '1';
    document.getElementById('sm-p2').style.right = '0';
    document.getElementById('sm-p3').style.opacity = '1';
    document.getElementById('sm-p3').style.right = '0';
    document.getElementById('photo').style.opacity = '1';
    document.getElementById('photo').style.top = '0';
    document.getElementById('open-skills').style.opacity = '1';
    document.getElementById('open-skills').style.left = '0';
    document.getElementById('programming').style.opacity = '1';
    document.getElementById('layout').style.opacity = '1';
    document.getElementById('client').style.opacity = '1';
    document.getElementById('server').style.opacity = '1';
    document.getElementById('database').style.opacity = '1';
    document.getElementById('cloud').style.opacity = '1';
    document.getElementById('colaborative').style.opacity = '1';
    document.getElementById('close-skills').style.opacity = '1';
    document.getElementById('close-skills').style.left = '0';
    document.getElementById('css-box').style.opacity = '1';
    document.getElementById('css-box').style.right = '0';
    document.getElementById('open-project').style.opacity = '1';
    document.getElementById('open-project').style.left = '0';
    document.getElementById('close-project').style.opacity = '1';
    document.getElementById('close-project').style.left = '0';
    document.getElementById('css-box2').style.opacity = '1';
    document.getElementById('css-box2').style.right = '0';
    document.getElementById('mern').style.opacity = '1';
    document.getElementById('a1').style.backgroundColor = '#2d2d2d';
    document.getElementById('a1').style.opacity = '0.6';
    document.getElementById('a2').style.backgroundColor = '#1E1E1E';
    document.getElementById('a2').style.opacity = '1';
    document.getElementById('a3').style.backgroundColor = '#2d2d2d';
    document.getElementById('a3').style.opacity = '0.6';
    document.getElementById('text-inf1').innerText = 'Sobre mí y qué puedo ofrecer';
    document.getElementById('text-inf1').style.opacity = '1';
    document.getElementById('text-inf1').style.right = '120px';
  } else {
    document.getElementById('sm-p1').style.opacity = '0';
    document.getElementById('sm-p1').style.right = '200px';
    document.getElementById('sm-p2').style.opacity = '0';
    document.getElementById('sm-p2').style.right = '200px';
    document.getElementById('sm-p3').style.opacity = '0';
    document.getElementById('sm-p3').style.right = '200px';
    document.getElementById('photo').style.opacity = '0';
    document.getElementById('photo').style.top = '300px';
    document.getElementById('open-skills').style.opacity = '0';
    document.getElementById('open-skills').style.left = '400px';
    document.getElementById('programming').style.opacity = '0';
    document.getElementById('layout').style.opacity = '0';
    document.getElementById('client').style.opacity = '0';
    document.getElementById('server').style.opacity = '0';
    document.getElementById('database').style.opacity = '0';
    document.getElementById('cloud').style.opacity = '0';
    document.getElementById('colaborative').style.opacity = '0';
    document.getElementById('close-skills').style.opacity = '0';
    document.getElementById('close-skills').style.left = '400px';
    document.getElementById('css-box').style.opacity = '0';
    document.getElementById('css-box').style.right = '200px';
    document.getElementById('open-project').style.opacity = '0';
    document.getElementById('open-project').style.left = '400px';
    document.getElementById('close-project').style.opacity = '0';
    document.getElementById('close-project').style.left = '400px';
    document.getElementById('css-box2').style.opacity = '0';
    document.getElementById('css-box2').style.right = '200px';
    document.getElementById('mern').style.opacity = '0';
    document.getElementById('a1').style.backgroundColor = '#1E1E1E';
    document.getElementById('a1').style.opacity = '1';
    document.getElementById('a2').style.backgroundColor = '#2d2d2d';
    document.getElementById('a2').style.opacity = '0.6';
    document.getElementById('a3').style.backgroundColor = '#2d2d2d';
    document.getElementById('a3').style.opacity = '0.6';
    document.getElementById('text-inf1').innerText = 'Sobre mí y qué puedo ofrecer';
    document.getElementById('text-inf1').style.opacity = '0';
    document.getElementById('text-inf1').style.right = '1200px';
  }
}

function scroll1500Function() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    document.getElementById('a1').style.backgroundColor = '#2d2d2d';
    document.getElementById('a1').style.opacity = '0.6';
    document.getElementById('a2').style.backgroundColor = '#2d2d2d';
    document.getElementById('a2').style.opacity = '0.6';
    document.getElementById('a3').style.backgroundColor = '#1E1E1E';
    document.getElementById('a3').style.opacity = '1';
    document.getElementById('text-inf1').innerText = 'Sobre mí y qué puedo ofrecer';
    document.getElementById('text-inf1').style.opacity = '0';
    document.getElementById('text-inf1').style.right = '-600px';
    document.getElementById('text-inf2').innerText = 'Mira lo que hago';
    document.getElementById('text-inf2').style.opacity = '1';
    document.getElementById('text-inf2').style.left = '150px';
    document.getElementById('proj-1').style.opacity = '1';
    document.getElementById('proj-1').style.top = '0';
    document.getElementById('proj-2').style.opacity = '1';
    document.getElementById('proj-2').style.top = '0';
    document.getElementById('proj-3').style.opacity = '1';
    document.getElementById('proj-3').style.top = '0';
    document.getElementById('proj-4').style.opacity = '1';
    document.getElementById('proj-4').style.top = '0';
    document.getElementById('proj-5').style.opacity = '1';
    document.getElementById('proj-5').style.top = '0';
    document.getElementById('proj-6').style.opacity = '1';
    document.getElementById('proj-6').style.top = '0';
  } else {
    document.getElementById('text-inf2').innerText = 'Mira lo que hago';
    document.getElementById('text-inf2').style.opacity = '0';
    document.getElementById('text-inf2').style.left = '-600px';
    document.getElementById('proj-1').style.opacity = '0';
    document.getElementById('proj-1').style.top = '50px';
    document.getElementById('proj-2').style.opacity = '0';
    document.getElementById('proj-2').style.top = '50px';
    document.getElementById('proj-3').style.opacity = '0';
    document.getElementById('proj-3').style.top = '50px';
    document.getElementById('proj-4').style.opacity = '0';
    document.getElementById('proj-4').style.top = '50px';
    document.getElementById('proj-5').style.opacity = '0';
    document.getElementById('proj-5').style.top = '50px';
    document.getElementById('proj-6').style.opacity = '0';
    document.getElementById('proj-6').style.top = '50px';
  }
}




parpadeo = function(){
  document.getElementById('sp4').classList.toggle('fade');
}
setInterval(parpadeo, 500);