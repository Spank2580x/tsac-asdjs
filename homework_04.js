
    function rpn(stack)
    {var h="h";
     var op="";
     var pre="";
     var pre2="";
        for(i=0;i<stack.length;i++)
        {

            if(stack[i]!="+" && stack[i]!="-"&& stack[i]!="*" && stack[i]!="/")
            {
                pre=stack[i];
                pre2=stack[i-1];
            }
            else
            {
                if(stack[i]=="+")
                {
                    op="+";
                }
                else if(stack[i]=="-")
                {
                    op="-";
                }
                else if(stack[i]=="*")
                {
                    op="*";
                }
                else if(stack[i]=="/")
                {
                    op="/";
                }
                make(pre,pre2,op);
                alert(stack.toString());
            }
        }
    }
    function make(pre,pre2,op)
    {
        if(op=="+")
        {
            return pre+pre2;
        }
        else if(op=="-")
        {
            return pre-pre2;
        }
        else if(op=="*")
        {
            return pre*pre2;
        }
        else if(op=="/")
        {
            return pre/pre2;
        }

    }

