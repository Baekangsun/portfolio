$(function () {

  //올메뉴(햄버거버튼)
  //allmenu_btn을 클릭하면 allmenu_box를 보임
  $('.allmenu_btn').click(function () {
    $('.allmenu_box, .header_util .login').show();
    $('html, body').css({ 'overflow-y': 'hidden' });
    $('.allmenu_wrap').addClass('on');
  });
  //close_btn
  $('.allmenu_box .close_btn').click(function () {
    $('.allmenu_box, .header_util .login').hide();
    $('html, body').css({ 'overflow-y': 'visible' })
    $('.allmenu_wrap').removeClass('on');
  });
  $('.allmenu_box .a1>li').has('ul').addClass('dep1');
  $('.allmenu_box .a2>li').has('ul').addClass('dep2');

  $('.allmenu_box .a1>li>a').click(function () {

    $('.allmenu_box .a1>li>a').not(this).next().slideUp()

    $(this).next().slideToggle();

    $('.dep1>a::before').hide()
  })
  $('.allmenu_box .a2>li>a').click(function () {
    $('.allmenu_box .a2>li>a').not(this).next().slideUp()
    $(this).next().slideToggle()
  })


  //팝업
  let s = 0, v, p;
  $('.popup_btn, .today_check .close_btn').click(function () {

    if (s == 0) {//보일 때 안보임
      v = 0; //팝업의 높이값과 헤더의 탑 값이 0이 되면 안보임
      p = 2; //키프레임 애니메이션의 번호 (회전 방향)
      s = 1; // 안보이게 설정 후에 다음 클릭에서는 else로 보내주기 위해 상태를 변경
    }
    else {//안보일때 보이게
      v = 110; p = 1; s = 0;
    }

    $('.popup').animate({ 'height': v })
    $('header').animate({ 'top': v })

    $('.popup_btn img').css({ 'animation': 'popup' + p + ' 0.5s forwards' })
  })

})//ready()