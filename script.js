const hEle = document.createElement('h1');
hEle.style.marginTop='200px'
hEle.style.marginLeft='200px'
hEle.style.color='black'
hEle.style.fontSize='100px'
const dElement = document.createElement('div');

dElement.style.backgroundColor='gold'
dElement.style.height='1000px'
dElement.style.width='2000px'
dElement.style.textAlign='center'
dElement.style.display='flex'
dElement.style.flexWrap='wrap'
dElement.append(hEle);
setTimeout(() => {
    hEle.innerText = 10;
    setTimeout(() => {
      hEle.innerText = 9;
      setTimeout(() => {
        hEle.innerText = 8;
        setTimeout(() => {
          hEle.innerText = 7;
          setTimeout(() => {
            hEle.innerText = 6;
                setTimeout(() => {
                    hEle.innerText = 5;
                    setTimeout(() => {
                    hEle.innerText = 4;
                    setTimeout(() => {
                        hEle.innerText = 3;
                        setTimeout(() => {
                        hEle.innerText = 2;
                        setTimeout(() => {
                            hEle.innerText = 1;
                            setTimeout(() => {
                            hEle.innerText = "Happy Independence Day";
                            }, 1000);
                        }, 1000)
                        }, 1000)
                    }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000);
        }, 1000)
        }, 1000)
    }, 1000)
    }, 1000);


  document.body.append(dElement);