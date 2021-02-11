// 네비게이션(Navigation) : GNB(메인메뉴) & LNB(서브메뉴)
// 마우스를 메인메뉴에 클릭하면 해당 서브메뉴가 아래로 나타난다.
// 1. 메인메뉴를 클릭하면 해당 메인 메뉴에 on 클래스가 추가(addClass)된다.
//    그리고 해당 버튼을 제외한 모든 버튼은 클래스가 삭제(removeClass)된다.
// 2. 해당 아래 서브메뉴에도 on 클래스가 추가(addClass)된다.
//    그리고 해당 서브메뉴를 제외한 모든 서브메뉴는 클래스가 삭제(removeClass)된다.
// 3. 해당 메인메뉴와 서브메뉴의 영역을 떠나면(mouseleave=mouseout) 
//    메인메뉴와 서브메뉴 모두 초기화, 모든 클랙스 삭제(removeClass) 된다.


var nav = {
    init:function(){
        this.navFn();
    },
    navFn:function(){
        var $mainBtn = document.getElementsByClassName('main-btn');
        var $sub     = document.getElementsByClassName('sub');
        var $navArea = document.getElementsByClassName('nav-area');

            // 메인0 버튼 클릭 추가(add) 이벤트(Event) 리스너(Listener) 등록
            // 버튼 타켓 EventTarget : $mainBtn[0]
            $mainBtn[0].addEventListener('mouseenter',function(event){
                event.preventDefault();
                // this.classList.add('on');   // 제이쿼리 : addClass('on')
                $mainBtn[0].classList.add('on');
                $mainBtn[1].classList.remove('on');
                $mainBtn[2].classList.remove('on');
                $mainBtn[3].classList.remove('on');
                
                // 서브메뉴 보이기 (show())
                $sub[0].classList.add('on');
                $sub[1].classList.remove('on');
                $sub[2].classList.remove('on');
                $sub[3].classList.remove('on');
                
            },false);

            // 버튼 타켓 EventTarget : $mainBtn[1]
            $mainBtn[1].addEventListener('mouseenter',function(event){
                event.preventDefault();
                // this.classList.add('on');   // 제이쿼리 : addClass('on')
                $mainBtn[0].classList.remove('on');
                $mainBtn[1].classList.add('on');
                $mainBtn[2].classList.remove('on');
                $mainBtn[3].classList.remove('on');

                // 서브메뉴 보이기 (show())
                $sub[0].classList.remove('on');
                $sub[1].classList.add('on');
                $sub[2].classList.remove('on');
                $sub[3].classList.remove('on');

            },false);

            // 버튼 타켓 EventTarget : $mainBtn[2]
            $mainBtn[2].addEventListener('mouseenter',function(event){
                event.preventDefault();
                // this.classList.add('on');   // 제이쿼리 : addClass('on')
                $mainBtn[0].classList.remove('on');
                $mainBtn[1].classList.remove('on');
                $mainBtn[2].classList.add('on');
                $mainBtn[3].classList.remove('on');

                // 서브메뉴 보이기 (show())
                $sub[0].classList.remove('on');
                $sub[1].classList.remove('on');
                $sub[2].classList.add('on');
                $sub[3].classList.remove('on');

            },false);

            // 버튼 타켓 EventTarget : $mainBtn[3]
            $mainBtn[3].addEventListener('mouseenter',function(event){
                event.preventDefault();
                // this.classList.add('on');   // 제이쿼리 : addClass('on')
                $mainBtn[0].classList.remove('on');
                $mainBtn[1].classList.remove('on');
                $mainBtn[2].classList.remove('on');
                $mainBtn[3].classList.add('on');

                // 서브메뉴 보이기 (show())
                $sub[0].classList.remove('on');
                $sub[1].classList.remove('on');
                $sub[2].classList.remove('on');
                $sub[3].classList.add('on');

            },false);


            // li .$navArea 영역을 떠나면 메인메뉴, 서브메뉴 모든 클래스 삭제
                $navArea[0].addEventListener('mouseleave',function(){
                $mainBtn[0].classList.remove('on');
                $sub[0].classList.remove('on');
                },false);

                $navArea[1].addEventListener('mouseleave',function(){
                $mainBtn[1].classList.remove('on');
                $sub[1].classList.remove('on');
                },false);

                $navArea[2].addEventListener('mouseleave',function(){
                $mainBtn[2].classList.remove('on');
                $sub[2].classList.remove('on');
                },false);
                
                $navArea[3].addEventListener('mouseleave',function(){
                $mainBtn[3].classList.remove('on');
                $sub[3].classList.remove('on');
                },false);

    }
};

nav.init();

