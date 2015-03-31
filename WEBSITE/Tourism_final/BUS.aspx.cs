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
    protected void LinkButton12_Click(object sender, EventArgs e)
    {
        Response.Redirect("BUS.aspx#Amritsar");
    }

    protected void LinkButton14_Click(object sender, EventArgs e)
    {
        Response.Redirect("BUS.aspx#Chandigarh");
    }
    protected void LinkButton15_Click(object sender, EventArgs e)
    {
        Response.Redirect("BUS.aspx#Jalandhar");
    }
    protected void LinkButton16_Click(object sender, EventArgs e)
    {
        Response.Redirect("BUS.aspx#Ludhiana");
    }
}