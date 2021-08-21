// @include"source/globalog.jsxinc";
// @include"source/widgets/globalog_win.jsxinc";


var betlog = CreateGlobaLog(Folder.myDocuments.fsName.split("\\").join("/") + "/xxx.txt");
betlog.log("ddd",3);
betlog.log("");
//~ betlog.print(true);

betlog.log("isko",1);
betlog.log("kalabaw",0);
betlog.writeSep();
betlog.setLevel(4);
betlog.log("palitaw");
betlog.log("ppp");
betlog.log("dangerous");
betlog.log(betlog.getTime(true));

betlog.log("tito",1);
betlog.log("vice",0);
betlog.log("joey");
betlog.log("eat bulaga");
betlog.log("cheetaeh");
betlog.log("ungga");
betlog.log(betlog.getTime(true));

GlobaLogWin();
GLOBALOG_WIN.populate(betlog.buffer);
GLOBALOG_WIN.show();