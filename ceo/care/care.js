/* 사장님 든든 서랍 공통 동작 (2026-11-19)
   - .chk 안 체크박스를 고르면 .chk-out 에 "확인해 볼 것 N개"를 보여 주고,
     고른 항목은 window.CARE_PICKED() 로 신청서(payload)에 같이 보냄 */
(function(){
  function picked(){
    return Array.prototype.slice.call(document.querySelectorAll('.chk input:checked')).map(function(i){ return i.getAttribute('data-t') || (i.parentNode.querySelector('span') || i.parentNode).textContent.trim().split('\n')[0]; });
  }
  window.CARE_PICKED = picked;
  function draw(){
    var out = document.querySelector('.chk-out'); if(!out) return;
    var n = picked().length;
    var none = out.getAttribute('data-none') || '해당하는 항목을 눌러 보세요.';
    var some = out.getAttribute('data-some') || '확인해 볼 것이 <b>{n}개</b> 있습니다. 아래에서 상담을 요청하시면 함께 정리해 드립니다.';
    out.innerHTML = n ? some.replace('{n}', n) : none;
  }
  document.addEventListener('change', function(e){ if(e.target.closest && e.target.closest('.chk')) draw(); });
  if(document.readyState !== 'loading') draw(); else document.addEventListener('DOMContentLoaded', draw);
})();
