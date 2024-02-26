// No1 quyidagilarni javoblarini toping va nimaga ekanligni ayting
// ||(OR) YOKI operatori
1 || 0;
0 || alert(0);
0 || 0;
0 || -1 || "";
0 || "" || 0;
1 || 0 || 0;
0 || false || undefined || null || "";
NaN || 0;
NaN || 1;
0 || NaN || "" || false;
0 || false || NaN;

// &&(AND) VA operatori
1 && true;
true && false;
false && true;
0 && 1 && true && 2 && alert("Hello");
true && false && "" && 0;
NaN && 0;
0 && NaN;
1 && 23 && -1 && " " && alert(1);
NaN && 1 && 2 && 3 && "Hello" && alert(0);

// !(NOT) NOT operatori
!true;
!false;
!0;
!1;
![];
!{};
!"";
!!"Hello";
!!2;

// ??(NULLISH) operatori
null ?? alert(1);
undefined ?? null ?? "hello";
"hello" ?? undefined;
alert("Hello") ?? true;
alert("") ?? false;
alert() ?? 0;
false ?? alert("hello");

// Birgalikda
1 || (2 && (3 || 4));
(1 || 2) && (3 || 4);
1 || (2 && (3 || 4));
1 || (2 && (3 || 4));
1 || (2 && 3) || 4;
(1 && 2) || (3 && 4);
(true && "Hello") || (false && "false");
(!2 && !!"") || "3";
"b" + "a" + +"a" + "a";
!!0 || 1;
!!1 && !!0;
alert("") ?? "Hello" ?? undefined;
!!alert("") ?? "Hello";
undefined ?? alert();
