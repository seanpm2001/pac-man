function(l,k){l[l.x]=' ';if(l[l.x+l.d]=='#')l.d=0;if(k>36&&k<41&&l[l.x+(k=k%2?k-38:(k-39)*l.w)]!='#')l.d=k;l.p+=l[l.x+=l.d]=='.';l[l.x]='P'}