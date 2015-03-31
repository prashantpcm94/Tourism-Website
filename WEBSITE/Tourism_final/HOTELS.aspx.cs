using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Default4 : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Menu2_MenuItemClick(object sender, MenuEventArgs e)
    {

    }
    protected void LinkButton12_Click(object sender, EventArgs e)
    {
        Response.Redirect("HOTELS.aspx#Amritsar");
    }
    protected void LinkButton13_Click(object sender, EventArgs e)
    {
        Response.Redirect("HOTELS.aspx#Bathinda");
    }
    protected void LinkButton14_Click(object sender, EventArgs e)
    {
        Response.Redirect("HOTELS.aspx#Chandigarh");
    }
    protected void LinkButton15_Click(object sender, EventArgs e)
    {
        Response.Redirect("HOTELS.aspx#Jalandhar");
    }
    protected void LinkButton16_Click(object sender, EventArgs e)
    {
        Response.Redirect("HOTELS.aspx#Ludhiana");
    }
}