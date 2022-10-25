function j(x){
    var r=new Date();
    var t= Math.floor((r-x)/1000/60/60/24/365);
    console.log(t)
  }
  j(new Date(2002,8,29));