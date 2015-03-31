using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    static int g = 1;
    protected void Menu1_MenuItemClick(object sender, MenuEventArgs e)
    {
        g = Convert.ToInt32(Menu1.SelectedValue);
        Image2.ImageUrl = "~/PICS/" + g + "/" + 1 + ".jpg";
    }
    static int f = 1;
    protected void Timer3_Tick(object sender, EventArgs e)
    {
        f++;
        if (f == 6)
            f = 1;
        Image2.ImageUrl = "~/PICS/" + g + "/" + f + ".jpg";
    }
    protected void Button4_Click(object sender, EventArgs e)
    {
        f--;
        if (f == 0)
            f = 5;
        Image2.ImageUrl = "~/PICS/" + g + "/" + f + ".jpg";
    }
    protected void Button5_Click(object sender, EventArgs e)
    {
        f++;
        if (f == 6)
            f = 1;
        Image2.ImageUrl = "~/PICS/" + g + "/" + f + ".jpg";
    }
}