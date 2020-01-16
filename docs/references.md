# References
This section provides links to background information useful to understand this project and make progress on the standard and the reference implementations.

::: tip
This section is just getting started, filling more as we have the time and energy. Suggestions welcome.
:::


## General Information
[*DC Distribution Systems and Microgrids*](https://www.amazon.com/Distribution-Systems-Microgrids-Energy-Engineering/dp/1785613820) Dragičević, T., P. Wheeler and F. Blaabjerg (Editors). London: The Institution of Engineering and Technology, 2018. A good general reference about DC grids. Includes a chapter on stability analysis.

[*Microgrids: Architectures and Control*](https://ieeexplore.ieee.org/book/6685216) Hatziargyriou, Nikos (Editor). New York: Wiley-IEEE
34 Press, 2014. Another good reference about the microgrids.

## Microgrid Architecture
[*DC Local Power Distribution with
Microgrids and Nanogrid*]Nordman, B, and K. Christensen, First International Conference on DC Microgrids, Atlanta, GA, June 2015. Bruce Nordman was an early advocate and innovator for the kinds of microgrids this project is working toward. [Bruce's website](http://nordman.lbl.gov/) is a trove of papers, talks and related material.

### Related Microgrid Standards
<a name="IEEEP2030.10"></a>[IEEE P2030.10 Draft Trial-Use Standard for DC Microgrids for Rural and Remote Electricity Access Applications](https://site.ieee.org/sagroups-2030-10/) Describes the requirements to implement an unmanaged grid operating at a nominal 48V. Includes external wiring recommendations and safety concerns. One of the standards this project is attempting to harmonize with. P2030.10, in turn, is harmonized with [ISO 21780](#ISO21780).

[IEEE P2030.10.1 Standard for Electricity Access Requirements with Safety Extra Low Voltage (SELV) DC for Tier ll and Tier lll of Energy Sector Management Assistance Program (ESMAP) Multi-tier Framework for Household Electricity Supply](https://standards.ieee.org/project/2030_10_1.html) An IEEE project to define household distribution of power at a nominal 48V. Based on IS16711.

<a name="IS16711"></a>[IS 16711:2017 48 V ELVDC distribution system - Guidelines](https://www.services.bis.gov.in:8071/php/BIS/bisconnect/pow/is_details?IDS=MjI3MTI%3D) A standard from the Bureau of Indian Standards for distribution of 48V inside a home with a maximum branch current of 5A. A presentation about the standard is avaiable [here](https://bis.org.in/other/ETD_SC/ETD_SC_Presentation_8.pdf).

## Vehicle Electrical Standards and Systems
When practical, this standard attempts to harmonize with existing standards for low voltage power distribution used in vehicles.

<a name="ISO21780"></a>[ISO 21780 Road vehicles — Supply voltage of 48 V — Electrical requirements and tests](https://www.iso.org/standard/71607.html) One of the standards this project is intending to harmonize with. It defines functiona state across of range of operating voltages and tests needed to validate that a component will interoperate with other equipment in the vehicle. Based on [VDA 320](#VDA320).

<a name="VDA320"></a>[VDA 320 - Electric and Electronic Components in Motor Vehicles 48 V On-Board Power Supply](https://www.vda.de/en/services/Publications/vda-320---components-for-the-development-of-48-v-on-board-power-supply.html) A standard from the German auto industry association addressing power distribution at 48V. A good paper about this activity is: [48-Volt Electrical Systems – A Key Technology Paving to the Road to Electric Mobility](https://www.zvei.org/fileadmin/user_upload/Presse_und_Medien/Publikationen/2016/april/48-Volt_Electrical_Systems_-_A_Key_Technology_Paving_the_Road_to_Electric_Mobility/48-Volt-Electrical-Systems-Electric-Mobility-engl-2016.pdf) from [ZVEI](https://www.zvei.org/).

LV 124 - A german auto industry standard for electrical components operating at 12V. (Need authoritative reference) A description of the tests is available from [WKS Informatik GbmH](http://www.wks-informatik.de/wp-content/uploads/DocumentDownloads/June2017/LV124_LV148_WKSInformatikSolutions.pdf).

LV 148 - A german auto industry standard for electrical components operating at 48V. (Need authoritative reference) A description of the tests is available from [WKS Informatik GbmH](http://www.wks-informatik.de/wp-content/uploads/DocumentDownloads/June2017/LV124_LV148_WKSInformatikSolutions.pdf).

<a name="SAE563"></a>[SAE 563 Standard for 12 Volt Cigarette Lighters, Power Outlets, and Accessory Plugs](https://www.sae.org/standards/content/j563_200902/). The standard that formally describes the ubiquitous cigarette lighter outlet. A 12V link in the project needs to harmonize with devices designed for this outlet. See also [Wikipedia: Automobile auxiliary power outlet](https://en.wikipedia.org/wiki/Automobile_auxiliary_power_outlet).

<a name="ISO4165"></a>[ISO 4165:2001 Electrical connections — Double-pole connection](https://www.iso.org/standard/33321.html). The standard that describes the electric outlet used on some European vehicles. Slightly smaller than the American cigarette lighter outlet described by [SAE 563](#SAE563). See also: [Wikipedia: ISO 4165](https://en.wikipedia.org/wiki/ISO_4165).
