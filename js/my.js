function update()
        {
            if(parseInt(subTotal.value) <= 10000  && parseInt(subTotal.value) >= 100)
                {
                    tax.value = (0.12 * subTotal.value);
                    total.value = parseInt(tax.value) + parseInt(subTotal.value);
                    amountPaid.disabled = false;
                    amountPaid.value = total.value;
                    amountPaid.min = total.value;
                    change.value = parseInt(amountPaid.value) - parseInt(total.value);
                    pay.disabled = false;
                    pay.style.backgroundColor = "green";
                }
                else
                {
                    tax.value = ""
                    total.value = ""
                    amountPaid.value = ""
                    change.value = ""
                    amountPaid.disabled = true;
                    pay.disabled = true;
                    pay.style.backgroundColor = "#737373";
                }

        }

        function update2()
        {
                    change.value = parseInt(amountPaid.value) - parseInt(total.value);
                    if(parseInt(change.value) >= 0)
                    {
                        pay.disabled = false;
                        pay.style.backgroundColor = "green";
                    }
                    if(parseInt(change.value) < 0)
                    {
                        pay.disabled = true;
                        pay.style.backgroundColor = "#737373";
                    }
        }