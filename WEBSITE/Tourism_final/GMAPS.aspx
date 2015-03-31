<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="GMAPS.aspx.cs" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <p style="height: 671px; text-align: center;">
        <asp:Label ID="Label15" runat="server" Font-Bold="True" Font-Size="X-Large" Font-Underline="True" ForeColor="#663300" Text="Google Maps"></asp:Label>
        <br />
    </p>
    <div style="position:absolute; left: 18px; top: 32px; width: 835px; height: 614px;">
        
            
    
        <script src="https://www.google.com/maps/place/Punjab/@31.018031,75.396323,8z/data=!3m1!4b1!4m2!3m1!1s0x391964aa569e7355:0x8fbd263103a38861">
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
        <div id="googleMap" style="width:819px; height:584px;"></div>
    </div>
</asp:Content>


