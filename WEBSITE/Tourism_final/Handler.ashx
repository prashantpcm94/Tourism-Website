<%@ WebHandler Language="C#" Class="Handler" %>

using System;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

public class Handler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) 
    {
        SqlDataReader rdr = null;
        SqlConnection conn = null;
        SqlCommand selcmd = null;
        conn = new SqlConnection(ConfigurationManager.ConnectionStrings["cn"].ConnectionString);
        selcmd = new SqlCommand("select dp from reviews where username=" + context.Request.QueryString["uname"], conn);
        conn.Open();
        rdr = selcmd.ExecuteReader();
        while (rdr.Read())
        {
            context.Response.ContentType = "image/jpg";
            context.Response.BinaryWrite((byte[])rdr["dp"]); 
        }
        rdr.Close();
        conn.Close();
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}