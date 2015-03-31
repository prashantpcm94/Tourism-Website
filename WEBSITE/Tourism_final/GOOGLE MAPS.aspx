<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="GOOGLE MAPS.aspx.cs" Inherits="Default3" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <p style="height: 671px; text-align: center;">
        <asp:Label ID="Label5" runat="server" BorderColor="#CC0099" BorderStyle="Groove" Font-Bold="True" Font-Size="20pt" ForeColor="#663300" Text="GOOGLE MAPS"></asp:Label>
        <br />
    </p>
        <script src="http://www.google.co.in/maps/@30.9497505,75.8850177,8z">
</script>

<script>
    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap")
          , mapProp);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
</script>
    <div id="googleMap" style="width:742px;height:536px;"></div>
</asp:Content>

