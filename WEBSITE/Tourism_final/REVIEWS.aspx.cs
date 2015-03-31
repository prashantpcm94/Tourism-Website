using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Media;
using System.IO;

public partial class _Default : System.Web.UI.Page
{
    SqlConnection con = new SqlConnection();
    protected void Page_Load(object sender, EventArgs e)
    {
        con.ConnectionString = ConfigurationManager.ConnectionStrings["cn"].ConnectionString;
        SqlCommand cmd = new SqlCommand();
        cmd.CommandText = "select * from tbrev";
        cmd.Connection = con;
        con.Open();
        SqlDataReader dr = cmd.ExecuteReader();
        dr.Read();
        con.Close();
    }
    protected void LinkButton14_Click(object sender, EventArgs e)
    {
        Label15.Text = "ludhiana"; Label15.Visible = true;
    }
    protected void LinkButton13_Click(object sender, EventArgs e)
    {
        Label15.Text = "jalandhar"; Label15.Visible = true;
    }
    protected void LinkButton12_Click(object sender, EventArgs e)
    {
        Label15.Text = "amritsar"; Label15.Visible = true;
    }
    protected void LinkButton11_Click(object sender, EventArgs e)
    {
        Label15.Text = "bathinda"; Label15.Visible = true;
    }
    protected void LinkButton10_Click(object sender, EventArgs e)
    {
        Label15.Text = "chandigarh";
        Label15.Visible = true;
    }
    protected void LinkButton15_Click(object sender, EventArgs e)
    {
        if (Session["login"] == "true")
        {
            SqlCommand cmd = new SqlCommand();
            con.Open();
            cmd.CommandText = "insert into tbrev values(@name,@uname,@review,@dp,@city)";
            cmd.Parameters.Add("@review", SqlDbType.VarChar, 1000).Value = TextBox3.Text;
            cmd.Parameters.Add("@city", SqlDbType.VarChar, 20).Value = DropDownList1.SelectedValue;
            cmd.Parameters.Add("@uname", SqlDbType.VarChar, 20).Value = Session["uname"];
            cmd.Parameters.Add("@name", SqlDbType.VarChar, 20).Value = Session["fname"];
            cmd.Parameters.Add("@dp", SqlDbType.VarChar, 50).Value = Session["dp"].ToString();
            cmd.Connection = con;
            cmd.ExecuteNonQuery();
            con.Close();
            TextBox3.Text = null;
            Label4.Text = "Thanks For the Review";
        }
        else
        {
            Label4.Text = "To give a review login first";
        }
    }
}