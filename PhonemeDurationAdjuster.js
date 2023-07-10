function getClientInfo() {
  return {
    name: SV.T("Vowel Length Batch Adjustment"),
    author: "MUTED64",
    versionNumber: 0.1,
    minEditorVersion: 65540,
  };
}

function getTranslations(langCode) {
  if (langCode == "zh-cn") {
    return [
      ["Vowel Length Batch Adjustment", "元音长度批量调节"],
      ["No note selected", "未选择音符"],
      ["Please select some notes first.", "请先选中一些音符。"],
      ["Current Voice Language", "当前歌声语言"],
      ["Cantonese", "粤语"],
      ["English", "英语"],
      ["Japanese", "日语"],
      ["Mandarin", "普通话"],
      ["Vowels Duration", "元音长度"],
      ["Consonants Duration", "辅音长度"],
      ["Please select the current singing language and select the vowel and consonant length.", "请选择当前歌唱语言，并选择需要的元音和辅音长度。"]
    ];
  }
  return [];
}

function main() {
  var selection = SV.getMainEditor().getSelection();
  var selectedNotes = selection.getSelectedNotes();
  var scope = SV.getMainEditor().getCurrentGroup();
  var group = scope.getTarget();

  var phonemeCategories = [
    { // Cantonese
      vowels: [
        "a",
        "6",
        "E",
        "e",
        "i",
        "I",
        "O",
        "o",
        "u",
        "U",
        "9",
        "8",
        "y",
        "m=",
        "N=",
        ":i",
        ":u",
        ":m",
        ":n",
        ":N",
        ":p_}",
        ":t_}",
        ":k_}",
      ],
      consonants: [
        "ts",
        "tsh",
        "f",
        "h",
        "s",
        "l",
        "m",
        "n",
        "N",
        "w",
        "j",
        "p",
        "ph",
        "t",
        "th",
        "k",
        "kh",
        "kw",
        "kwh",
      ],
    },
    { // English
      vowels: [
        "aa",
        "ae",
        "ah",
        "ao",
        "aw",
        "ax",
        "ay",
        "eh",
        "er",
        "ey",
        "ih",
        "iy",
        "ow",
        "oy",
        "uh",
        "uw",
      ],
      consonants: [
        "b",
        "ch",
        "d",
        "dx",
        "dr",
        "dh",
        "f",
        "g",
        "hh",
        "jh",
        "k",
        "l",
        "m",
        "n",
        "ng",
        "p",
        "r",
        "s",
        "sh",
        "t",
        "tr",
        "th",
        "v",
        "w",
        "y",
        "z",
        "zh",
      ],
    },
    { // Japanese
      vowels: ["a", "i", "u", "e", "o", "N"],
      consonants: [
        "cl",
        "t",
        "d",
        "s",
        "sh",
        "j",
        "z",
        "ts",
        "k",
        "g",
        "h",
        "b",
        "p",
        "f",
        "ch",
        "ry",
        "ky",
        "py",
        "dy",
        "ty",
        "ny",
        "hy",
        "my",
        "gy",
        "by",
        "n",
        "m",
        "r",
        "w",
        "v",
        "y",
      ],
    },
    { // Mandarin
      vowels: [
        "a",
        "A",
        "o",
        "@",
        "e",
        "7",
        "U",
        "u",
        "i",
        "i\\",
        "i`",
        "y",
        "AU",
        "@U",
        "ia",
        "iA",
        "iAU",
        "ie",
        "iE",
        "iU",
        "i@U",
        "y{",
        "yE",
        "ua",
        "uA",
        "u@",
        "ue",
        "uo",
        ":\\i",
        "r\\`",
        ":n",
        "N",
      ],
      consonants: [
        "p",
        "ph",
        "t",
        "th",
        "k",
        "kh",
        "ts\\",
        "ts",
        "tsh",
        "ts`",
        "ts`h",
        "x",
        "f",
        "s",
        "s`",
        "ts\\h",
        "s\\",
        "m",
        "n",
        "l",
        "z`",
        "w",
        "j",
      ],
    },
  ];

  if (selectedNotes.length == 0) {
    SV.showMessageBox(
      SV.T("No note selected"),
      SV.T("Please select some notes first.")
    );
    return;
  } else {
    var form = {
      title: SV.T("Vowel Length Batch Adjustment"),
      message: SV.T(
        "Please select the current singing language and select the vowel and consonant length."
      ),
      buttons: "OkCancel",
      widgets: [
        {
          "name" : "currentLanguage", 
          "type" : "ComboBox",
          "label" : SV.T("Current Singing Language"),
          "choices" : [SV.T("Cantonese"), SV.T("English"), SV.T("Japanese"), SV.T("Mandarin")],
          "default" : 2,
        },
        {
          "name" : "consonantsDuration", 
          "type" : "Slider",
          "label" : SV.T("Consonants Duration"),
          "format" : "%.2f",
          "minValue" : 0.2,
          "maxValue" : 1.8,
          "interval" : 0.05,
          "default" : 1
        },
        {
          "name" : "vowelsDuration",
          "type" : "Slider",
          "label" : SV.T("Vowels Duration"),
          "format" : "%.2f",
          "minValue" : 0.2,
          "maxValue" : 1.8,
          "interval" : 0.05,
          "default" : 1
        },
      ],
    };

    var result = SV.showCustomDialog(form);
    // object to string
    // SV.showMessageBox("result", JSON.stringify(result));

    if(result.status){
      // TODO
    }
    SV.finish();
  }
}
