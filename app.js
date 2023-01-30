$(document).ready(() => {
  const STAR_CLASS_NAME = "stars";
  const DETAIL_CLASS_NAME = "detail";
  const HAVE_BUTTON_CLASS_NAME = "app-header-contents";
  const ORIGIN_BUTTON_NAME = "js-fortune-start";
  const CHANGED_BUTTON_CLASS_NAME = "js-fortune-restart";
  const RESULT_CLASS_NAME = "result";
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
      if ($(this).hasClass(ORIGIN_BUTTON_NAME)) {
        for (const title in fortuneResults) {
          const rand = Math.floor(Math.random() * 3);
          const $target = $(`.${title}`);
          $target
            .find(`.${STAR_CLASS_NAME}`)
            .text(fortuneResults[title][rand][STAR_CLASS_NAME]);
          $target
            .find(`.${DETAIL_CLASS_NAME}`)
            .text(fortuneResults[title][rand][DETAIL_CLASS_NAME]);
        }
      }
      $(this).toggleClass(ORIGIN_BUTTON_NAME).prop("disabled", true);
      setTimeout(() => {
        $(this).prop("disabled", false);
      }, 1000);
      if ($(this).hasClass(ORIGIN_BUTTON_NAME)) {
        $(`.${RESULT_CLASS_NAME}`).fadeOut(1000);
        setTimeout(() => {
          $(this).text("運勢を占う！");
        }, 1000);
      } else {
        $(`.${RESULT_CLASS_NAME}`).fadeIn(1000);
        setTimeout(() => {
          $(this).text("もう一度占う");
        }, 1000);
      }
    });

    // another
    // $(`.${HAVE_BUTTON_CLASS_NAME}`).on("click", `.${ORIGIN_BUTTON_NAME}`, function () {
    //   for (const title in fortuneResults) {
    //     const rand = Math.floor(Math.random() * 3);
    //     const $target = $(`.${title}`);
    //     $target
    //       .find(`.${STAR_CLASS_NAME}`)
    //       .text(fortuneResults[title][rand][STAR_CLASS_NAME]);
    //     $target
    //       .find(`.${DETAIL_CLASS_NAME}`)
    //       .text(fortuneResults[title][rand][DETAIL_CLASS_NAME]);
    //   }
    //   toggleStartClass(this, "もう一度占う！");
    //   $(`.${RESULT_CLASS_NAME}`).show();
    // });
    // $(`.${HAVE_BUTTON_CLASS_NAME}`).on(
    //   "click",
    //   `.${CHANGED_BUTTON_CLASS_NAME}`,
    //   function () {
    //     $(`.${RESULT_CLASS_NAME}`).hide();
    //     toggleStartClass(this, "運勢を占う！");
    //   }
    // );
    // const toggleStartClass = (element, text) => {
    //   $(element)
    //     .toggleClass(ORIGIN_BUTTON_NAME)
    //     .toggleClass(CHANGED_BUTTON_CLASS_NAME)
    //     .text(text);
    // };
  });
});
