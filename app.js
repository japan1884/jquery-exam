$(document).ready(() => {
  const starClassName = "stars";
  const detailClassName = "detail";
  const haveBtnClassName = "app-header-contents";
  const originBtnName = "js-fortune-start";
  const changedBtnClassName = "js-fortune-restart";
  const resultClassName = "result";
  const fortuneResults = {
    money: [
      {
        stars: "★★★",
        detail: "最高の金運です！いつの間にかお金が溜まっているかも・・・？",
      },
      {
        stars: "★★",
        detail: "まずまず金運です！使いすぎには注意しましょう！",
      },
      {
        stars: "★",
        detail: "悪い傾向が見られます！財布の紐は絞めておくと吉です！",
      },
    ],
    work: [
      {
        stars: "★★★",
        detail:
          "最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？",
      },
      {
        stars: "★★",
        detail: "まずまず仕事運です！普段通り仕事が進むでしょう！",
      },
      {
        stars: "★",
        detail: "悪い傾向が見られます！自信過剰にならないように注意しましょう",
      },
    ],
    health: [
      {
        stars: "★★★",
        detail: "最高の健康運です！ランニングの距離を伸ばしても良いですね！",
      },
      {
        stars: "★★",
        detail: "まずまず健康運です！無理せず体を動かしましょう！",
      },
      {
        stars: "★",
        detail: "悪い傾向が見られます！ケガにご注意を・・・",
      },
    ],
  };
  $(() => {
    $(".start-button").click(function () {
      if ($(this).hasClass(originBtnName)) {
        for (const title in fortuneResults) {
          const rand = Math.floor(Math.random() * 3);
          const $target = $(`.${title}`);
          $target
            .find(`.${starClassName}`)
            .text(fortuneResults[title][rand][starClassName]);
          $target
            .find(`.${detailClassName}`)
            .text(fortuneResults[title][rand][detailClassName]);
        }
      }
      $(this).toggleClass(originBtnName).prop("disabled", true);
      setTimeout(() => {
        $(this).prop("disabled", false);
      }, 1000);
      if ($(this).hasClass(originBtnName)) {
        $(`.${resultClassName}`).fadeOut(1000);
        setTimeout(() => {
          $(this).text("運勢を占う！");
        }, 1000);
      } else {
        $(`.${resultClassName}`).fadeIn(1000);
        setTimeout(() => {
          $(this).text("もう一度占う");
        }, 1000);
      }
    });
    // $(`.${haveBtnClassName}`).on("click", `.${originBtnName}`, function () {
    //   for (const title in fortuneResults) {
    //     const rand = Math.floor(Math.random() * 3);
    //     const $target = $(`.${title}`);
    //     $target
    //       .find(`.${starClassName}`)
    //       .text(fortuneResults[title][rand][starClassName]);
    //     $target
    //       .find(`.${detailClassName}`)
    //       .text(fortuneResults[title][rand][detailClassName]);
    //   }
    //   toggleStartClass(this, "もう一度占う！");
    //   $(`.${resultClassName}`).show();
    // });
    // $(`.${haveBtnClassName}`).on(
    //   "click",
    //   `.${changedBtnClassName}`,
    //   function () {
    //     $(`.${resultClassName}`).hide();
    //     toggleStartClass(this, "運勢を占う！");
    //   }
    // );
    // const toggleStartClass = (element, text) => {
    //   $(element)
    //     .toggleClass(originBtnName)
    //     .toggleClass(changedBtnClassName)
    //     .text(text);
    // };
  });
});
