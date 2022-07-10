---
editLink: true
---

# References
This section provides links to background information useful to understand this project, the standard and the reference implementations.

::: tip
This section is just getting started, filling more as we have the time and energy. Suggestions welcome.
:::


## General Information
[*DC Distribution Systems and Microgrids*](https://www.amazon.com/Distribution-Systems-Microgrids-Energy-Engineering/dp/1785613820) Dragičević, T., P. Wheeler and F. Blaabjerg (Editors). London: The Institution of Engineering and Technology, 2018. A good general reference about DC grids. Includes a chapter on stability analysis.

[*Microgrids: Architectures and Control*](https://ieeexplore.ieee.org/book/6685216) Hatziargyriou, Nikos (Editor). New York: Wiley-IEEE
34 Press, 2014. Another good reference about the microgrids.

## Microgrid Architecture

<a name="Nordman"></a>[*DC Local Power Distribution with Microgrids and Nanogrid*](https://drive.google.com/open?id=0B8B9XW6B7prlczMzOE1QWHFXNjA).
Nordman, B, and K. Christensen, First International Conference on DC Microgrids, Atlanta, GA, June 2015. 
Bruce Nordman was an early advocate and innovator for the kinds of microgrids this project is working toward. [Bruce's website](http://nordman.lbl.gov/) is a trove of papers, talks and related material.

<a name="LPD"></a>[*A Simulation of Local Power Distribution Control Strategies*](https://drive.google.com/file/d/0B8B9XW6B7prlRksyQk9TVl9tU3c/view). Nordman, B., K. Spears, A. Kahndkar, and M. Pezzola. 
Second International Conference on DC Microgrids, Nurnburg, Germany, June 2017 - Contains a more detailed description of the LPD power protocols.

<a name="Hyphae"></a>[Hyphae](https://www.lfenergy.org/projects/hyphae/). 
A project from [Sony CSL](https://www.sonycsl.co.jp/) to define peer-to-peer power distribution in a microgrid. 
The architecture and software have been offered under open source adopted by [LFEnergy](#LFEnergy).
The [specification](https://github.com/hyphae/apis-main/blob/master/doc/en/apis-main_specification_en.md)
and code are available on the [Hyphae GitHub Site](https://github.com/hyphae).

## Related Microgrid Standards
<a name="IEEEP2030.10"></a>[IEEE 2030.10-2021 Standard for DC Microgrids for Rural and Remote Electricity 
Access Applications](https://standards.ieee.org/ieee/2030.10/10742/) Describes the requirements to implement an unmanaged grid 
operating at a nominal 48V. Includes external wiring recommendations and safety concerns. This project 
is harmonized with [ISO 21780](#ISO21780) for 48V automotive electrics.

<a name="TMS"></a>[Tactical Microgrid Standard](https://d2vkrkwbbxbylk.cloudfront.net/sites/default/files/tms-omg-mars-20190319-release-v2_sm.pdf)
TMS is a standard for implementing microgrids developed by the US Army and the MIT Lincoln Laboratory. Currently it is
focused on AC but they have plans to extend it to DC. The Army seems ambivalent about how open to make this standard.
Internally, it is based on 
[DDS (Data Distribution Service)](https://en.wikipedia.org/wiki/Data_Distribution_Service) middleware.

## Microgrid Activities and Publications

<a name="LFEnergy"></a>[LFEnergy Microgrid SIG](https://wiki.lfenergy.org/display/HOME/Microgrids+SIG): 
A special interest group for microgrids under the LFEnergy project.
[LFEnergy](https://wiki.lfenergy.org/) is the home of several energy and smart grid-related open source projects 
operating under the umbrella of the [Linux Foundation](https://www.linuxfoundation.org/).

<a name="MicrogridKnowledge"></a>[Microgrid Knowledge](https://microgridknowledge.com) An online newsletter
focused on microgrids and distributed energy resources.

## DC Distribution Standards and Systems

### DC Distribution Standards
<a name="CurrentOS"></a>[Current OS Foundation](https://currentos.foundation/) 
The Foundation is dedicated to promoting Current OS, a microgrid protocol for DC power distribution invented by [DC Systems](#DCSystems) (now a part of [Schneider](#Schneider)).
The web site claims to offer "free access to IP" but so far, it just describes the system via a series of web pages.

<a name="EMerge"></a>[EMerge Alliance](https://www.emergealliance.org/) EMerge is an industry association
focused on promoting the use of DC in various forms of power distribution including lighting systems
and data centers. It claims to be "open" but access to documents is restricted to members who pay to join.

<a name="IEEEP2030.10.1"></a>[IEEE P2030.10.1 Standard for Electricity Access Requirements with Safety Extra Low Voltage (SELV) DC for Tier ll and Tier lll of Energy Sector Management Assistance Program (ESMAP) Multi-tier Framework for Household Electricity Supply](https://standards.ieee.org/project/2030_10_1.html) An IEEE project to define household distribution of power at a nominal 48V. Based on [IS 16711](#IS16711).

<a name="IS16711"></a>[IS 16711:2017 48 V ELVDC distribution system - Guidelines](https://standardsbis.bsbedge.com/BIS_SearchStandard.aspx?Standard_Number=IS%2016711&id=22856) A standard from the Bureau of Indian Standards for distribution of 48V inside a home with a maximum branch current of 5A. A presentation about the standard is avaiable [here](https://bis.org.in/other/ETD_SC/ETD_SC_Presentation_8.pdf).


### DC Distribution Vendor Systems
<a name="DCSystems"></a>[DC Systems](https://www.dc.systems/) Makes products for distribution of DC power at 350V and 700V.
These products are designed to work with the [Current OS](#CurrentOS) architecture. DC Systems was acquired by [Schneider](#Schneider) in 2021 and is now
a subsidiary of [Schneider](#Schneider).

<a name="Domatic"></a>[Domatic.io](https://www.domatic.io/) A system for the distribution of ELVDC (~48V)
power for commercial and household applications such as lighting, fans etc. utilizing Class 2 wiring
and incorporating [HD-PLC](#HD-PLC) for communicating between a power hub and application nodes.

<a name="Schneider"></a>[Schneider Electric](https://www.se.com/ww/en/). Schneider is a global vendor of
power systems components including microgrids. They have an extensive catalog of DC devices including circuit breakers, switches etc.

### Software Defined Power Systems
<a name="OwnTech"></a>[OwnTech](https://www.owntech.org/): An initiative under 
[CNRS](http://www.cnrs.fr/en) and [LAAS](https://www.laas.fr/public/en) to create a library of stackable and reprogrammable
hardware and associated software accessible via open source that can be combined to create power systems over a wide range of power levels
including both DC and AC. Includes a [software API](https://www.owntech.org/en/Owntech-Power-API-Core-Documentation/) for the modules.
The code is available at the [OwnTech GitLab Repository](https://gitlab.laas.fr/owntech/power-api).

<a name="MPLab"></a>[MPLab](https://mplab.ee.columbia.edu/): A [Columbia University](https://www.columbia.edu/) project
to define software defined power systems and motors.

## Off-Grid Energy Access Organizations and Initiatives
<a name="AFDB"></a>[African Development Bank](https://www.afdb.org/en) Finance organization focused on
economic development and social progress in Africa. Offers the
[Green Mini-Grid Help Desk](https://greenminigrid.afdb.org/) a resource that offers a wide
variety of publications relating to mini-grids from technical advice, finance, commissioning and more.

<a name="ARE"></a>[Alliance for Rural Electrification (ARE)](https://www.ruralelec.org/) 
A business association that promotes a sustainable decentralised renewable energy industry.

<a name="AMDA"></a>[Africa Minigrid Developers Association](https://africamda.org/) A trade association focused on minigrids for Africa.

<a name="CLASP"></a>[CLASP](https://clasp.ngo/): An NGO focused on energy efficient appliances
to minimize climate change and provide clean energy access. Closely affiliated with other organizations in this section
including [Efficiency For Access](#EfficiencyForAccess) and [Verasol](#Verasol).

<a name="EfficiencyForAccess"></a>[Efficiency For Access](https://efficiencyforaccess.org/): A coalition of NGOs that sponsors
activities and funding to support energy access. Offers a [library of publications](https://efficiencyforaccess.org/publications)
containing reports addressing various aspects of the energy access challenge.

<a name="ESMAP"></a>[Energy Sector Management Assistance Program (ESMAP)](https://www.esmap.org/): An organization
sponsored by the World Bank and other partners to help low and middle-income countries reduce poverty and boost growth through sustainable energy solutions.
ESMAP created the [multi-tier framework for measruing energy access](https://www.esmap.org/node/55526)
([full report](http://openknowledge.worldbank.org/bitstream/handle/10986/24368/Beyond0connect0d000technical0report.pdf?sequence=1&isAllowed=y))
that adds clarity and nuance to the concept of lacking energy.

<a name="GOGLA"></a>[GOGLA - Global Off-Grid Lighting Association](https://www.gogla.org/): 
Industry association for vendors participating in the off-grid solar industry. 
Publishes market surveys and coordinates industry standards for interoperablity and quality assurance.
In cooperation with [Lighting Global](#LightingGlobal), publishes its biannual 
[Global Off-Grid Market Sales Report](https://www.gogla.org/global-off-grid-solar-market-report) 
that provides a detailed breakdown of off-grid market sales. In an attempt to
create some standardization of 12V appliances, GOGLA has published
[The Connect Initiative](https://www.gogla.org/resources/the-connect-initiative),
a recommendation for connectors and electrical requirements.

<a name="LightingAfrica"></a>[Lighting Africa](https://www.lightingafrica.org/): 
World Bank initiative to promote off-grid lighting and electricity specifically focused on sub-Saharan Africa.

<a name="LightingAsia"></a>[Lighting Asia](https://www.lightingafrica.org/): 
World Bank initiative to promote off-grid lighting and electricity specifically focused on Asia
with a regional subgroup focused on
[India](https://www.lightingasia.org/india/).

<a name="LightingGlobal"></a>[Lighting Global](https://www.lightingglobal.org/): 
World Bank initiative to promote off-grid lighting and electricity. 
Maintains a [database of products](https://www.lightingglobal.org/products/) that have been tested according to well-defined standards. 
The actual testing of these products has been spun off into a separate organization, [Verasol](#Verasol).
Lighting Global has regional affiliates [Lighting Africa](#LightingAfrica)
and [Lighting Asia](#LightingAsia).

<a name="RMI"></a>[RMI](https://rmi.org/): Rocky Mountain Institute (RMI) is an organization in the United States dedicated to research, publication, consulting, and 
lecturing in the general field of sustainability, with a special focus on profitable innovations for energy and resource efficiency
[Wikipedia - RMI](https://en.wikipedia.org/wiki/Rocky_Mountain_Institute). 
One of their
initiatives is the
[Africa Energy Program](https://rmi.org/our-work/seed/) that seeks to accelerate energy access
in sub-Sahran Africa. [RMI is based in the US](https://rmi.org/about/office-locations/) with offices globally.

<a name="USAID"></a>[USAID Toolkit](https://www.usaid.gov/energy/mini-grids) The 
[US Agency for International Development](https://www.usaid.gov/) 
[Energy Section](https://www.usaid.gov/energy) offers a tool kit of publications
that addresses many aspects of mini-grid development including technical and finance.

<a name="Verasol"></a>[Verasol](https://verasol.org/): Organization focused on testing and quality assurance for the off-grid
energy market, spun-off from [Lighting Global](#LightingGlobal). Products are tested against
[IEC TS 62257-9-8](https://webstore.iec.ch/publication/62431), quality standards for pico-solar products and SHS kits
derived from [Lighting Global](#LightingGlobal) testing procedures. Products that pass are issued a Verasol Certificate.

<a name="Wind Empowerment"></a>[Wind Empowerment](https://windempowerment.org/): Wind Empowerment is an association for the 
development of locally manufactured small wind turbines for sustainable rural electrification. 

## Off-Grid Energy Access Vendors

Companies currently offering products and services related to Open DC Grid:

<a name="Angaza"></a>[Angaza](https://www.angaza.com/): Makes
remote management and customer relationship software for off-grid power systems.
Angaza is based in the US and Kenya and markets its products globally.

<a name="ConnectedEnergy"></a>[Connected Energy](https://connectedenergy.net): Makes
smart monitoring products for off-grid energy including solar and biogas.
Connected Energy is based in Scotland and markets its products globally.

<a name="INENSUS"></a>[INENSUS](https://www.inensus.com/) Software developer and consultancy focused on management software
for decentralized utilities. Offers 
[Micropowermanager](https://github.com/inensus/MPManager) software as open source with repo on GitHub.
[Based in Germany](https://www.google.com/maps/place/INENSUS+GmbH/@51.899282,10.432949,6z/data=!4m5!3m4!1s0x0:0xf4b2dc3baf4f2119!8m2!3d51.899274!4d10.4329631?hl=en-US).

<a name="LibreSolar"></a>[Libre Solar](https://libre.solar/): A company founded by 
Open DC Grid co-founder [Martin Jäger](participants#MartinJäger) that makes PV charge controllers,
battery management systems and other hardware for the renewable energy and energy access markets. Libre Solar
offers its designs under open source at its [GitHub site](https://github.com/LibreSolar).
Libre Solar is based in Germany and collaborates with partners to offer products globally.

<a name="MeshPower"></a>[MeshPower Rwanda](https://www.meshpower.co.rw/): Sells
solar powered microgrids and smart meters for the energy access markets. Its business model
is to sell energy as a service that does not require the customer to purchase hardware. 
It is based in Rwanda and its primary market focus is central Africa.
MeshPower Rwanda is a subsidiary of [Xpower](#Xpower).

<a name="OkraSolar"></a>[OkraSolar](https://okrasolar.com/): Offers tools and hardware
for the last mile distribution of power via mesh grids. Okra is based in Cambodia
and its primary markets are in East Asia including Cambodia and the Philippines.

<a name="Solaris"></a>[Solaris Offgrid](https://www.solarisoffgrid.com/): Provides software
and services for off-grid vendors particularly tools related to pay-as-you-go (PAYGO) billing.
Solaris Offgrid is based in London and markets its products globally.
 
<a name="Solshare"></a>[Solshare](https://me-solshare.com/): Interconnects solar home systems
into smart peer-to-peer microgrids that allows consumers to monetize excess solar energy by
sharing it with neighbors utilizing mobile money. Solshare is based in Bangladesh
and its primary markets are in South Asia.

<a name="TFEEnergy"></a>[TFE Energy GmbH](https://www.tfe.energy/) Consultancy focused
on mini-grid markets. 
[Based in Germany](https://www.google.com/maps/place/TFE+Energy+GmbH/@48.1578401,11.5813875,18z/data=!3m1!4b1!4m5!3m4!1s0x479e7531d997732b:0x5a528a807e09f6e6!8m2!3d48.157779!4d11.5824733).

<a name="Winch"></a>[Winch Energy](https://www.winchenergy.com/): Winch Energy is a global, off-grid 
energy developer and technology designer and integrator. Focus on Renewable Energy and Energy 
Efficiency projects in Europe, Africa, Latin America and Asia. Products include 
[Remote Power Unit (RPU)](https://www.winchenergy.com/what-we-do) 
([photo](https://africamda.org/wp-content/uploads/2020/07/winch-energy-interview-pic-2.jpg)),
a containerized turn-key solar minigrid.


<a name="Xpower"></a>[Xpower](https://www.xpowerinc.com/): A US company focussed on 
developing technologies which enable distributed utilities across the 
developing world to provide rural communities with modern services. 

## Vehicle Electrical Standards and Systems

When practical, this standard attempts to harmonize with existing standards for low voltage power distribution used in vehicles.

### Vehicle Electrical Systems

<a name="ISO21780"></a>[ISO 21780 Road vehicles — Supply voltage of 48 V — Electrical requirements and tests](https://www.iso.org/standard/71607.html) One of the standards this project is intending to harmonize with. It defines functiona state across of range of operating voltages and tests needed to validate that a component will interoperate with other equipment in the vehicle. Based on [VDA 320](#VDA320).

<a name="VDA320"></a>[VDA 320 - Electric and Electronic Components in Motor Vehicles 48 V On-Board Power Supply](https://www.vda.de/en/services/Publications/vda-320---components-for-the-development-of-48-v-on-board-power-supply.html) A standard from the German auto industry association addressing power distribution at 48V. A good paper about this activity is: [48-Volt Electrical Systems – A Key Technology Paving to the Road to Electric Mobility](https://www.zvei.org/fileadmin/user_upload/Presse_und_Medien/Publikationen/2016/april/48-Volt_Electrical_Systems_-_A_Key_Technology_Paving_the_Road_to_Electric_Mobility/48-Volt-Electrical-Systems-Electric-Mobility-engl-2016.pdf) from [ZVEI](https://www.zvei.org/).

LV 124 - A german auto industry standard for electrical components operating at 12V. (Need authoritative reference) A description of the tests is available from [WKS Informatik GbmH](http://www.wks-informatik.de/wp-content/uploads/DocumentDownloads/June2017/LV124_LV148_WKSInformatikSolutions.pdf).

LV 148 - A german auto industry standard for electrical components operating at 48V. (Need authoritative reference) A description of the tests is available from [WKS Informatik GbmH](http://www.wks-informatik.de/wp-content/uploads/DocumentDownloads/June2017/LV124_LV148_WKSInformatikSolutions.pdf).

<a name="SAE563"></a>[SAE 563 Standard for 12 Volt Cigarette Lighters, Power Outlets, and Accessory Plugs](https://www.sae.org/standards/content/j563_200902/). The standard that formally describes the ubiquitous cigarette lighter outlet. A 12V link in the project needs to harmonize with devices designed for this outlet. See also [Wikipedia: Automobile auxiliary power outlet](https://en.wikipedia.org/wiki/Automobile_auxiliary_power_outlet).

<a name="ISO4165"></a>[ISO 4165:2001 Electrical connections — Double-pole connection](https://www.iso.org/standard/33321.html). 
The standard that describes the electric outlet used on some European vehicles. Slightly smaller than the 
American cigarette lighter outlet described by [SAE 563](#SAE563). See also: [Wikipedia: ISO 4165](https://en.wikipedia.org/wiki/ISO_4165).

### Electric Vehicle Charging Systems

[TU Deflt Open University Overview](https://ocw.tudelft.nl/wp-content/uploads/eCARS2x_Lecture_Notes_L3-3.pdf) A good overview
of the various standards related to EV charging.

<a name="BharatEVCharger"></a>[India - Bharat EV Charger Specifications](http://dhi.nic.in/writereaddata/UploadFile/Standardization%20of%20protocol.pdf)
A standard from India for EV charging stations that includes 48V DC charging with currents up to 200A. 
The DC interface is based on the Chinese EV connector standard [GB/T20234.3](#GBT202343).
The interface includes a CAN with the protocols being a slightly modified version of the Chinese EV charging
protocol standard [GB/T 27930-2015](#GBT27930) which is, in turn, a modified version of [SAE J1939](#SAEJ1939).

<a name="GBT202343"></a>[China - EV DC Charging Connector Standard GB/T20234.3](https://www.codeofchina.com/standard/GBT20234.3-2015.html)
A standard for a DC charging connector and cable capable of up to 200A.

<a name="GBT27930"></a>[China - EV Charging Protocol Standard GB/T 27930-2015](https://www.codeofchina.com/standard/GBT27930-2015.html)
The China standard application protocol for EV charging. A modified version of [SAE J1939](#SAEJ1939). It uses CAN for electrical connectivity.
[A CAN newsletter](https://can-newsletter.org/uploads/media/raw/ae1b15472210b28577b4a241b03a231f.pdf) gives an overview of the standard. 

<a name="IEC61851"></a>[IEC 61851](https://webstore.iec.ch/publication/33644) The IEC standard collection for EV charging.
[Wikipedia](https://en.wikipedia.org/wiki/IEC_61851) has a brief overview of the collection which includes
[IEC 61851-23:2014](https://webstore.iec.ch/publication/6032) that defines a DC charging station and
[IEC 61851-24:2014](https://webstore.iec.ch/publication/6033) that defines the DC communications Protocol.

<a name="SAEJ1939"></a>[US - EV Charging Communications Standard SAE J1939](https://www.sae.org/standardsdev/groundvehicle/j1939a.htm) A collection of standards
for communications relating to EV charging based on CAN. [Wikipedia](https://en.wikipedia.org/wiki/SAE_J1939) has an overview.
 
<a name="SAEJ1772"></a>[US - EV Charging Connector Standard SAE J1772](https://www.sae.org/standards/content/j1772_201710/)
The US Standard for an AC charging connector. [Wikipedia](https://en.wikipedia.org/wiki/SAE_J1772) has an overview.

<a name="OpenCharge"></a>[Open Charge Alliance](https://www.openchargealliance.org/) An association of vendors
promoting the Open Charge Point Protocol - an open standard for EV charging.

### V2G - Vehicle to Grid
V2G refers to using the batteries in a vehicle to provide power to a local microgrid or to the utility grid,
the inverse of charging, which may be economically advantageous in some circumstances.

<a name="V2GChargingProfile"></a>[SunSpec IEEE 2030.5 / SAE J3072 EV Charging 
Profile](https://sunspec.org/sunspec-specifications-for-approval/) A profile of the [IEEE 2030.5](#IEEE2030-5) standard
for power systems information management that is targeted toward V2G applications.

## Software Standards and Initiatives
<a name="OpenAPI"></a>[OpenAPI Initiative](https://www.openapis.org/): A standard that
allows the description of a remote API accessible through HTTP or HTTP-like protocols including 
[CoAP](#CoAP). The API is described in a schema written in [JSON](#JSON). [Tools](#OpenAPITools) exist to
translate the schema into client or server source code in many computer languages and frameworks. 

The following items are organized roughly by layer according to the [OSI model](https://en.wikipedia.org/wiki/OSI_model)
but note that things don't always fall neatly into that model or span multiple layers.

### Layer 1: Physical Layer

<a name="6loWPAN"></a>
[6loWPAN - Transmission of IPv6 over Low-Power Wireless Personal Area Networks (RFC 4944)](https://tools.ietf.org/html/rfc4944):
This RFC addresses using IPv6 in resource constrained devices. It defines how to combine small 127-byte frames
into larger packets. The RFC is oriented toward wireless networks but wired communications in resource constrained
devices face many of the same issues and can use the same techniques. It is extended by [RFC 6282
Compression Format for IPv6 Datagrams over IEEE 802.15.4-Based Networks](https://tools.ietf.org/html/rfc6282)
that addresses header compression.

<a name="CANbus"></a>[CAN bus - Controller Area Network](https://en.wikipedia.org/wiki/CAN_bus):
A multi-master serial bus originally designed by 
[Robert Bosch, gmbh](https://www.bosch.com/) for use in automobiles but now
expanded to many applications, especially automation. 
It is formally defined by a series of
ISO standards ([ISO-11898](https://www.iso.org/search.html?q=11898&hPP=10&idx=all_en&p=0&hFR%5Bcategory%5D%5B0%5D=standard)) 
that include multiple physical transmission standards and link-layer protocols.
The standard does not specify connectors so 
[multiple connector types](http://www.interfacebus.com/Can_Bus_Connector_Pinout.html)
have been informally adopted.
An [older version of the standard](http://esd.cs.ucr.edu/webres/can20.pdf), 
now superseded by the ISO version is available online. Prototype boards
developed by Libre.Solar and used for testing by ODG include CAN bus functionality.

<a name="HD-PLC"></a>[HD-PLC (High definition power line communications)](https://en.wikipedia.org/wiki/HD-PLC):
HD-PLC is a profile of [IEEE 1901a-2019](#IEEE-1901) managed by the 
[HD-PLC Alliance](https://hd-plc.org/), a vendor trade organization.
HD-PLC incorporates "HD-PLC Complete" which is basically the IEEE version and
"HD-PLC Multihop" that includes hopping technology described in [ITU-T G.9905](https://hd-plc.org/standards/itu-t-g-9905/) to extend
the range via retransmitting nodes.

<a name="IEEE-1901"></a>[IEEE 1901-2010 Standard for Broadband over Power Line Networks: Medium Access Control and Physical Layer Specifications](https://en.wikipedia.org/wiki/IEEE_1901):
A standard for communicating using power lines. The original version was based on FFT OFDM.
In 2019, an amendment known as IEEE 1901a-2019 was added to support wavelet OFDM for higher data rates
and longer range.
Two related standards have been created by the same committee,
IEEE 1901.1 which uses mid-frequency (< 12 MHz) OFDM and IEEE 1901.2 low frequency (< 500 kH) for use on
wide area power line networks. 

<a name="LIN"></a>[LIN - Local Interconnect Network](https://en.wikipedia.org/wiki/Local_Interconnect_Network):
A system for transmitting low-speed data using flat (not twisted pair) wiring. LIN was original designed
for use as a less expensive alternative to the [CAN bus](#CANbus) in automobiles. It is formally defined by a series of
ISO standards ([ISO-17987](https://www.iso.org/standard/61222.html)) that include link-layer protocols
but good information about its electrical properties is available from semiconductor vendors who offer low-cost transceivers.
ODG is primarily interested the use of these transceivers that implement the physical layer.

<a name="LoRaWAN"></a>[LoRa](https://en.wikipedia.org/wiki/LoRa) A proprietary modulation technique for low-power
wide-area communications. LoRa defines the physical layer and a protocol stack defining upper layers
is referred to as LoRaWAN. The system is supported and promoted by an industry trade group, the
[LoRa Alliance](https://lora-alliance.org/).

<a name="TI-LIN"></a>[LIN Protocol and Physical Layer Requirements - TI SSLA383-2018](https://www.ti.com/lit/an/slla383/slla383.pdf):
This TI application report provides good details about the LIN physical layer.

### Layer 2: Link Layer

<a name="OpenPAYGO Link"></a>[OpenPAYGO Link](https://www.paygops.com/openpaygolink): 
An initiative by [Solaris](https://www.solarisoffgrid.com/) to define a system for
low-cost communications between appliances and solar home systems based on a LIN
physical layer but supporting dynamic address assignment.
Solaris presented an overview during the 
[ODG meeting of August 11, 2020](https://open-dc-grid.org/meetings.html#_2020-08-11-meeting).   

### Layer 3: Network Layer

<a name="IPV6"></a>[IPv6 - Internet Protocol version 6](https://en.wikipedia.org/wiki/IPv6): 
The replacement for 32-bit IPv4 that, among other things,
extends the address to 128-bits so that every device can have its own unique address in the global internet
These addresses are defined in [RFC 4291](https://tools.ietf.org/html/rfc4291) but there are many related RFCs.
Some ODG functions operate without any network or transport layer

### Layer 4: Transport Layer

<a name="UDP"></a>[UDP - User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol): One of the
foundational protocols of the internet (along with [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)) 
used to send raw packets without guarantees of delivery.
It supports both unicast and multicast transmission. The original definition is [RFC 768](https://tools.ietf.org/html/rfc768)
that dates back to 1980. Much ODG traffic is conceptually carried in UDP packets but much of it may be elided
through various optimizations.

### Layer 5: Session Layer

<a name="CoAP"></a>[Constrained Application Protocol (RFC 7252)](https://tools.ietf.org/html/rfc7252): A transport protocol
specialized for use in resource constrained devices. It implements a REST semantics of GET, PUT etc similar to
the similar HTML operations with an exponential backoff retry. The RFC describes this as a transport protocol because it can provide
delivery guarantees but it typically rides on [UDP](#UDP) but other transport bindings are possible including TCP.

### Layer 6: Presentation Layer

<a name="CBOR"></a>[CBOR - Concise Binary Object Representation](https://en.wikipedia.org/wiki/CBOR): A data interchange
format based on [JSON](#JSON) but binary encoded for a more concise representation. It is formally
defined in [RFC 7049](https://tools.ietf.org/html/rfc7049).

<a name="JSON"></a>[JSON - Javascript Object Notation](https://en.wikipedia.org/wiki/JSON): A data interchange format
based on human-readable text used widely in the internet and in ODG tools and device resources. It is formally
defined in [RFC 8259](https://tools.ietf.org/html/rfc8259).

### Layer 7: Application Layer

<a name="AngazaNexusChannel"></a>[Angaza Nexus Channel](https://angaza.github.io/nexus/channel): 
A transport-agnostic application layer for secure communication between resource-constrained devices
particularly focused on implementing PAYGO (pay-as-you-go) in resource constrained devices.
Nexus channel implements a subset of [OCF](#OCF), split between the core which implements the resource model 
and the full channel that addresses security. It is an MIT-licensed open source project with
a [GitHub repository](https://github.com/angaza/nexus-embedded). 
Angaza presented an overview during the [ODG meeting of August 11, 2020](https://open-dc-grid.org/meetings.html#_2020-08-11-meeting).

<a name="IEEE2030-5"></a>[IEEE 2030.5-2018 - IEEE Standard for Smart Energy Profile Application Protocol](https://standards.ieee.org/standard/2030_5-2018.html): 
A transport-agnostic protocol for the smart metering and automation of demand/response and load control.
Similar to [OCF](#OCF), IEEE 2030.5 uses REST to manipulate resources but in this case the methods are HTML
and the resources are represented in XML. The models are based on those of [SunSpec](http://sunspec.org/wp-content/uploads/2019/08/inverter-control-final.pdf)
/[IEC 61850](https://en.wikipedia.org/wiki/IEC_61850) and have origins
in [Zigbee SEP 2.0](https://www.energy.gov/sites/prod/files/2014/05/f16/CSEP%20Overview%20%28ZigBee%20Allinace%29_0.pdf). 
IEEE 2030.5 is the "default protocol" for [California Rule 21](https://www.cpuc.ca.gov/Rule21/) 
on distributed energy resources
with the intent that it be implemented by smart inverters attached to the public grid or by intermediate aggregators
where IEEE 2030.5 is the communications protocol to access the inverter functionality defined by 
[IEEE 1547](https://standards.ieee.org/standard/1547-2018.html).
[Modbus](#Modbus) is an alternative.

<a name="IoTivity"></a>[IoTivity](https://iotivity.org/): An Apache-2.0 licensed open source reference implementation of [OCF](#OCF) available
via a [GitHub project](https://github.com/iotivity). It includes a variety tools in various repositories but the
primary implementation [iotivity-lite](https://github.com/iotivity/iotivity-lite) is in C 
and includes a light-weight [CoAP](#CoAP) implementation.

<a name="Modbus"></a>[Modbus](https://en.wikipedia.org/wiki/Modbus): A family of communications protocols
that span all layers of the OSI model. At its core, Modbus is a simple get/set protocol for basic
resources are identified by proprietary station addresses and function codes. The original
devices were Modicon (Schneider) programmable logic controllers but the protocol
has been applied to many other devices. Of most interest to ODG is a 
[set of Modbus specifications](https://sunspec.org/sunspec-modbus-specifications/)
from the [SunSpec Alliance](https://sunspec.org/) that define how to query and manipulate
a grid-connected inverter. The latest versions of these standards are semantically
equivalent to the [IEEE 2030.5](#IEEE2030-5) resources.

<a name="OCF"></a>[OCF - Open Connectivity Foundation](https://openconnectivity.org/): A multi-vendor initiative to define
an application layer protocol to manipulate IOT devices based on rigidly defined resource models that are manipulated
using REST-type transactions. The OCF standard documents have been submitted for release as an ISO standard
but currently can be [downloaded from the OCF web site](https://openconnectivity.org/developer/specifications/).
The models themselves can be downloaded from [oneIoTa.org](#oneIoTa).

<a name="oneIoTa"></a>[oneIoTa](https://oneiota.org/): A repository of [OCF](#OCF) device models.
These models are JSON files using the schema defined by the [OpenAPI Specification](https://swagger.io/specification/)
which can be read by the [Swagger](https://swagger.io/) tool to generate API code in various languages.
In some cases these models define a complete API for a device. More commonly a device is expected
to combine various models like [BinarySwitch](https://oneiota.org/revisions/6149) - a very long-winded
way to describe an on-off switch.

<a name="OpenADR"></a>[OpenADR](https://www.openadr.org/): An open standard to automate and simplify
[Demand Response(DR)](https://en.wikipedia.org/wiki/Demand_response), a mechanism by which a utility
grid can ask power consumers to reduce power consumption to match the supply available to the utility.
In the context of microgrids, the utility grid would ask the microgrid to reduce its demand
at the [point of common coupling](https://en.wikipedia.org/wiki/Microgrid#Point_of_common_coupling_%28PCC%29).
The microgrid would then adjust its internal power flows to minimize consumption from the utility grid.

<a name="ThingSet"></a>[ThingSet](https://thingset.io/): A transport agnostic protocol for the setting of things.
It is a client server protocol where the values
are represented in [JSON](#JSON) for human readability or [CBOR](#CBOR) for machine consumption.
Information is represented as a tree and can be retrieved via a query that can include an entire branch.
Modifications use a mechanism similar to iPATCH as defined in [RFC 8132](https://tools.ietf.org/html/rfc8132),
a potentially multi-valued but idempotent modification of leaf nodes. A full-stack architecture
is defined including support for serial, [CAN](#CANbus) and [LoRaWAN](#LoRaWAN) physical layers.
Code is available at the [ThingSet GitHub repository](https://github.com/ThingSet).

## Embedded Systems, Development Tools and Firmware

### Embedded Systems - Microcontrollers

<a name="ArmCortexM"></a>[Arm Cortex-M](https://en.wikipedia.org/wiki/ARM_Cortex-M): A family
of 32-bit 
[RISC](https://en.wikipedia.org/wiki/Reduced_instruction_set_computer) 
processor cores based on designs licensed from
[Arm](https://en.wikipedia.org/wiki/Arm_Ltd). Microcontrollers based on these cores
with varying peripherals are available from many vendors include [ST](#STM32),
[TI](https://www.ti.com/microcontrollers-mcus-processors/processors/arm-based-processors/products.html)
and others. Firmware for these microcontrollers is commonly compiled using
the 
[GNU tool chain](#GNUToolchain).

<a name="STM32"></a>[STM32](https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html): 
A family of 32-bit microcontrollers based on the Arm Cortex -M series of processors.
These are the microcontrollers most commonly used on ODG demonstration boards.
A useful way to get started with STM32 is to purchase one of the family of ST demonstration
boards referred to as 
[STM32 Nucleo](https://www.st.com/en/evaluation-tools/stm32-nucleo-boards.html).
These are low-cost and many come with pins that support 
[Arduino Shields](https://playground.arduino.cc/Main/SimilarBoards/#goShie).

### Tools for Embedded Software

<a name="Docker"></a>[Docker](https://www.docker.com/): A lightweight virtualization tool that allows
a host computer to execute virtualized images of other platforms. The docker engine is free and available
for Windows, Mac and Linux. For development, docker supports
creating an image with all the tools installed with known versions and a known OS
so a build can be assured of completing, such as
[zephyrprojectrtos/zephyr-build](https://hub.docker.com/r/zephyrprojectrtos/zephyr-build)
which is a snapshot of the official Zephyr project build environment.


<a name="Eclipse"></a>[Eclipse](https://www.eclipse.org): A free and open source desktop integrated
development environment (IDE) that supports plugins for a wide variety of specialized tools.
Typically these plugins can be applied to the 
[base Eclipse platform](https://www.eclipse.org/downloads/) or as a download
that has the plugin preinstalled so that the combined environment is ready to run, referred to as
***packages*** in the Eclipse world.
Some packages that may be of interest to ODG developers include:

* <a name="EclipseCDT"></a>[Eclipse CDT](https://www.eclipse.org/cdt/): An IDE for C and C++ programming. Includes
editors, compilers([GCC](#GCC) and [Clang](https://clang.llvm.org/)),
debuggers([GDB](https://www.gnu.org/software/gdb/) and
[LLDB](https://lldb.llvm.org/)) and build tools([Make](https://www.gnu.org/software/make/), Eclipse native).

* <a name="EclipseEmbeddedCDT"></a>[Eclipse Embedded CDT](https://projects.eclipse.org/projects/iot.embed-cdt): 
A more specialized version of [Eclipse CDT](#EclipseCDT) focused on
[Arm](https://en.wikipedia.org/wiki/ARM_architecture) and
[RISC-V](https://en.wikipedia.org/wiki/RISC-V) applications. Supports multiple tool chains.

<a name="GNUToolchain"></a>[GNU Toolchain](https://en.wikipedia.org/wiki/GNU_toolchain): 
A set of open-source programming tools from the
[GNU Project](https://en.wikipedia.org/wiki/GNU_Project).
Packages (build-essential) to install the tool chain are available on all flavors of Linux. On Windows
these tools are typically installed using 
[mingw-w64](http://mingw-w64.org/doku.php/start). On a Mac, the tool chain can be installed
with a package manager such as [homebrew](https://brew.sh/).
The tools include:

* <a name="GCC"></a>[GCC](https://gcc.gnu.org/): A cross-compiler with front ends for C, C++
and other languages.

* <a name="GDB"></a>[GDB](https://www.gnu.org/software/gdb/): 
A command line debugger. IDEs such as [Eclipse](#EclipseCDT) integrate GDB to provide a GUI.

* <a name="GNUMake"></a>[GNU Make](https://www.gnu.org/software/make/): 
A build tool that describes the creation of an executable using dependencies
to minimize recompilation.

<a name="OpenAPITools"></a>[OpenAPI Tools](https://openapi.tools/): A collection of
tools to edit [OpenAPI](#OpenAPIß) schemas, generate client or server code and test the schema.

<a name="Platformio"></a>[Platformio](https://platformio.org/): An open source
tool for developing embedded firmware. It can be run as command line interface (CLI)
or as an integrated development environment (IDE) operating as an extension to
[Visual Studio Code](https://code.visualstudio.com/) a free code editor from Microsoft.

<a name="STMCubeIDE"></a>[STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html): 
A repackaged version of [Eclipse](#Eclipse) that contains plugins to simplify
development on the [SMT32](#STM32) processors including a pinout configurator.

### Operating Systems for Embedded Software

<a name="Zephyr"></a>[Zephyr RTOS](https://www.zephyrproject.org/): An open source
[real time operating system(RTOS)](https://en.wikipedia.org/wiki/Real-time_operating_system) 
that provides the OS platform for ODG's
demonstration boards. It's 
[main repository](https://github.com/zephyrproject-rtos/zephyr) is hosted on GitHub.



