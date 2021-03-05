var inpMonth, inpDay;
inpMonth = prompt("Month 1-12")
inpDay = prompt("Start Day 1-7")

function Calendar(element, month, day) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let mName = ''
    if (month == 1)
        mName = 'JANUARY'
    else if (month == 2)
        mName = 'FEBRUARY'
    else if (month == 3)
        mName = 'MARCH'
    else if (month == 4)
        mName = 'APRIL'
    else if (month == 5)
        mName = 'MAY'
    else if (month == 6)
        mName = 'JUNE'
    else if (month == 7)
        mName = 'JULY'
    else if (month == 8)
        mName = 'AUGUST'
    else if (month == 9)
        mName = 'SEPTEMBER'
    else if (month == 10)
        mName = 'OCTOBER'
    else if (month == 11)
        mName = 'NOVEMBER'
    else if (month == 12)
        mName = 'DECEMBER'
    else 
    {
        mName = "Invalid Input"
    }
    let WeekC = 0
    let CDays = 1
    let Adder = 1
    let tblCreate = 
    `<table>
        <tr>
        <td colspan = "7"id="month" style="text-align:center; font-size: larger;">
        ${mName}
        </td>
        </tr>
        <tr>
            <th style="color:white; background-color: black; text-align:center;">
            SUN
            </th>
            <th style="text-align:center">
            MON
            </th>
            <th style="color:white; background-color: black; text-align:center">
            TUE
            </th>
            <th style="text-align:center">
            WED
            </th>
            <th style="color:white; background-color: black; text-align:center">
            THU
            </th>
            <th style="text-align:center">
            FRI
            </th>
            <th style="color:white; background-color: black; text-align:center">
            SAT
            </th>
        </tr>`
    
if(month > 12 || day > 7)
{
    element.innerHTML = ('<h3 style="text-align: center; color: red; background-color:black;">Invalid Input!</h3>')
}
else if(month == 0 || day == 0)
    element.innerHTML = ('<h3 style="text-align: center; color: red; background-color:black;">Invalid Input!</h3>')
    else
    {
        if(days[month-1] == 31)
        {
            if(day >= 6)
            {
                for (let i = 0; i < 42; i++) 
                {
                    if (WeekC == 0) 
                    {
                        tblCreate  += '<tr>'
                    }
                    if (Adder <= day - 1)
                    {
                        tblCreate  += "<td></td>"
                        Adder++
                    }
                    else if (CDays > days[month - 1])
                        tblCreate  += "<td></td>"

                    else 
                    {
                        if (CDays <= days[month - 1]) 
                        {
                            tblCreate  += `<td>${CDays}</td>`
                            CDays++
                        }
                        else
                            tblCreate  += "<td></td>"
                    }
                    if (WeekC == 6) 
                    {
                        tblCreate  += '</tr>'
                        WeekC = 0
                    }
                    else 
                    {
                        WeekC++
                    }
                }
            }
            else{
                for (let i = 0; i < 35; i++) 
                {
                    if (WeekC == 0)
                    {
                        tblCreate  += '<tr>'
                    }
            
                    if (Adder <= day - 1) 
                    {
                        tblCreate  += "<td></td>"
                        Adder++
                    }
                    else if (CDays > days[month - 1])
                        tblCreate  += "<td></td>"

                    else 
                    {
                        if (CDays <= days[month - 1]) 
                        {
                            tblCreate  += `<td>${CDays}</td>`
                            CDays++
                        }
                        else
                            tblCreate  += "<td></td>"
                    }
                    if (WeekC == 6)
                    {
                        tblCreate  += '</tr>'
                        WeekC = 0
                    }
                    else 
                    {
                        WeekC++
                    }
                }
            }   
        }
        else if(days[month-1] == 28)
        {
            if(day >= 6)
            {
                for (let i = 0; i < 35; i++) 
                {
                    if (WeekC == 0)
                    {
                        tblCreate  += '<tr>'
                    }
                    if (adder <= day - 1) 
                    {
                        tblCreate  += "<td></td>"
                        Adder++
                    }
                    else if (CDays > days[month - 1])
                        tblCreate  += "<td></td>"
                    else 
                    {
                        if (CDays <= days[month - 1]) 
                        {
                            tblCreate  += `<td>${CDays}</td>`
                            CDays++
                        }
                        else
                            tblCreate  += "<td></td>"
                    }
                    if (WeekC == 6) 
                    {
                        tblCreate  += '</tr>'
                        WeekC = 0
                    }
                    else 
                    {
                        WeekC++
                    }
                }
            }

            else
            {
                for (let i = 0; i < 28; i++)
                {
                    if (WeekC == 0) 
                    {
                        tblCreate  += '<tr>'
                    }
                    if (Adder <= day - 1) 
                    {
                        tblCreate  += "<td></td>"
                        Adder++
                    }
                    else if (CDays > days[month - 1])
                        tblCreate  += "<td></td>"
                    else 
                    {
                        if (CDays <= days[month - 1]) 
                        {
                            tblCreate  += `<td>${CDays}</td>`
                            CDays++
                        }
                        else
                            tblCreate  += "<td></td>"
                    }
                    if (WeekC == 6) 
                    {
                        tblCreate  += '</tr>'
                        WeekC = 0
                    }
                    else 
                    {
                        WeekC++
                    }
                }
            }
        }
        else{
            if(day >= 6){
                for (let i = 0; i < 35; i++) 
                {
                    if (WeekC == 0) 
                    {
                        tblCreate  += '<tr>'
                    }
                    if (Adder <= day - 1) 
                    {
                        tblCreate  += "<td></td>"
                        Adder++
                    }
                    else if (CDays > days[month - 1])
                        tblCreate  += "<td></td>"
                    else 
                    {
                        if (CDays <= days[month - 1]) 
                        {
                            tblCreate  += `<td>${CDays}</td>`
                            CDays++
                        }
                        else
                            tblCreate  += "<td></td>"
                    }
                    if (WeekC == 6) 
                    {
                        tblCreate  += '</tr>'
                        WeekC = 0
                    }
                    else 
                    {
                        WeekC++
                    }
                }
            }
            else
            {
                for (let i = 0; i < 35; i++)
                {
                    if (WeekC == 0) 
                    {
                        tblCreate  += '<tr>'
                    }
                    if (Adder <= day - 1) 
                    {
                        tblCreate  += "<td></td>"
                        Adder++
                    }
                    else if (CDays > days[month - 1])
                        tblCreate  += "<td></td>"
                    else 
                    {
                        if (CDays <= days[month - 1]) 
                        {
                            tblCreate  += `<td>${CDays}</td>`
                            CDays++
                        }
                        else
                            tblCreate  += "<td></td>"
                    }
            
                    if (WeekC == 6) 
                    {
                        tblCreate  += '</tr>'
                        WeekC = 0
                    }
                    else 
                    {
                        WeekC++
                    }
                }
            }
        }
        tblCreate  += '</table>'
        element.innerHTML = tblCreate ;
        }
    }

Calendar(Cal, inpMonth, inpDay)