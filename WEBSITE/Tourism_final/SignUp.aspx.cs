using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.WebPages;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using System.IO;

public partial class _Default : System.Web.UI.Page
{
    static int i;
    Boolean upload = false;
    SqlConnection con = new SqlConnection();
    Random r = new Random();
    protected void Page_Load(object sender, EventArgs e)
    {
        con.ConnectionString = ConfigurationManager.ConnectionStrings["cn"].ConnectionString; 
        if (!IsPostBack)
        {    
            Label9.Visible = false;
            i = r.Next(1, 6);
            switch (i)
            {
                case 1:
                    TextBox11.Text = "A2Ke";
                    break;
                case 2:
                    TextBox11.Text = "F1fa";
                    break;
                case 3:
                    TextBox11.Text = "CdaC";
                    break;
                case 4:
                    TextBox11.Text = "O4OL";
                    break;
                case 5:
                    TextBox11.Text = "Xefu";
                    break;
                default:
                    break;
            }
            Image8.ImageUrl = "~/PICS/Validation/" + i + ".jpg";
        }
         MaintainScrollPositionOnPostBack = true;
    }
    protected void LinkButton1_Click(object sender, EventArgs e)
    {
        if (CheckBox2.Checked == true) 
        {
            if (TextBox8.Text == TextBox11.Text)
            {
                con.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandText = "insert into tbreg values(@fname,@lname,@uname,@pwd,@pno,@address,@dp)";
                cmd.Parameters.Add("@uname", SqlDbType.VarChar, 20).Value = TextBox3.Text;
                cmd.Parameters.Add("@fname", SqlDbType.VarChar, 20).Value = TextBox1.Text;
                cmd.Parameters.Add("@lname", SqlDbType.VarChar, 20).Value = TextBox2.Text;
                cmd.Parameters.Add("@pwd", SqlDbType.VarChar, 20).Value = TextBox4.Text;
                cmd.Parameters.Add("@pno", SqlDbType.VarChar, 10).Value = TextBox6.Text;
                cmd.Parameters.Add("@address", SqlDbType.VarChar, 50).Value = TextBox7.Text;
                cmd.Parameters.Add("@dp", SqlDbType.VarChar, 50).Value = Image9.ImageUrl;
                cmd.ExecuteNonQuery();
                Session["fname"] = TextBox1.Text;
                Session["uname"] = TextBox3.Text;
                Session["dp"] = Image9.ImageUrl;
                Session["login"] = "true";
                con.Close();
                cmd.Dispose();
                TextBox1.Text = null;
                TextBox2.Text = null;
                TextBox3.Text = null;
                TextBox4.Text = null;
                TextBox5.Text = null;
                TextBox6.Text = null;
                TextBox7.Text = null;
                TextBox8.Text = null;
                Response.Redirect("HOME.aspx");
            }
            else Label16.Visible = true;
        }
        else Label9.Visible = true;
    }

    protected void LinkButton2_Click(object sender, EventArgs e)
    {
        con.Open();
        SqlCommand cmd = new SqlCommand();
        cmd.CommandText = "select * from tbreg where uname=@uname and pwd=@pwd";
        cmd.Connection = con;
        cmd.Parameters.Add("@uname", SqlDbType.VarChar, 20).Value = TextBox9.Text;
        cmd.Parameters.Add("@pwd", SqlDbType.VarChar, 20).Value = TextBox10.Text;
        SqlDataReader dr = cmd.ExecuteReader();
        if (dr.HasRows)
        {
            dr.Read();
            Session["fname"]=dr["fname"];
            Session["uname"] = dr["uname"];
            Session["dp"] = dr["dp"];
            Session["login"] = "true";
            Label14.Visible = false;
            con.Close();
            cmd.Dispose();
            dr.Dispose();
            Response.Redirect("HOME.aspx");
        }
        else Label14.Visible = true;
        con.Close();
        cmd.Dispose();
        dr.Dispose();
    }

    protected void Button3_Click(object sender, EventArgs e)
    {
        FileUpload1.PostedFile.SaveAs(Server.MapPath("~/PICS/Upload/") + TextBox3.Text+".jpg");
        Image9.ImageUrl = "~/PICS/Upload/" + TextBox3.Text+".jpg";
        upload = true;
    }
    protected void TextBox3_TextChanged(object sender, EventArgs e)
    {
        con.Open();
        SqlCommand cmd = new SqlCommand();
        cmd.CommandText = "select * from tbreg where uname=@uname";
        cmd.Connection = con;
        cmd.Parameters.Add("@uname", SqlDbType.VarChar, 20).Value = TextBox3.Text;
        SqlDataReader dr = cmd.ExecuteReader();
        if (dr.HasRows)
        {
            Label13.Visible = true;
        }
        else Label13.Visible = false;
        con.Close();
        cmd.Dispose();
    }
    
}