---
editLink: true
---

# How to Participate
Development of the Open DC Grid Standard and the associated reference implementations is a collaborative effort driven by volunteers.
We welcome anyone to offer ideas and technical contributions.

We welcome every sort of contribution, from error reports to improvements of the document or entirely new ideas or chapters.

## Contact us
<a href="mailto:opendcgrid@gmail.com" target="_top"><img style="float: left;" src="./images/Letter.svg" hspace="0" width="80" height="40" alt="Open DC Grid Email"></img></a>You can contact us by email: <opendcgrid@gmail.com>

## Subscribe to our newsletter
<a href="https://buttondown.email/jlgula" target="_blank"><img style="float: left;" src="./images/news-2389226_1280.png" hspace="10" width="64" height="64" alt="Link to newsletter subscription page"></img></a>The project publishes
a periodic newsletter about the latest developments. We promise not to
spam you with too much news. You can [subscribe here](https://buttondown.email/jlgula). You can also browse the [full archive](https://buttondown.email/jlgula/archive) of past newsletters. Thanks to [Buttondown](https://buttondown.email/) for our mailing service.

## Attend a meeting
<a href="https://join.freeconferencecall.com/jlgula" target="_blank"><img style="float: left;" src="./images/FreeConferenceCall.png" hspace="10" width="64" height="64" alt="Link to Freeconferencecall meeting page"></img></a>
The project holds monthly web-based teleconferences using the conferencing service [freeconferencecall.com](https://www.freeconferencecall.com) to discuss the status and present new ideas.
A login to the service is not required but downloading their free app can give you a better experience.
We record the meetings so people can review them later and provide a link to any materials presented.
Meeting details are available on the [Meetings](./meetings) page of this web site.

##  Visit us on GitHub
<a href="https://github.com/open-dc-grid" target="_blank"><img style="float: left;" src="./images/GitHub-Mark-64px.png" hspace="10" alt="Link to Open DC Grid GitHub page"></img></a>
All project materials are publically accessible on the software development platform [GitHub](https://github.com/) as a collection of repositories under the [Git](https://git-scm.com/) source control system for the organization [open-dc-grid](https://github.com/open-dc-grid).
A GitHub login is not required to view or download the materials but is required if you wish to propose new material or changes to existing materials. GitHub logins are free.

Open DC Grid materials are located in one of the following repositories:

* [standard](https://github.com/open-dc-grid/standard): the text of the [Open DC Grid Standard](./standard)
* [implementation](https://github.com/open-dc-grid/implementation): reference designs and implementation suggestions
* [open-dc-grid.github.io](https://github.com/open-dc-grid/open-dc-grid.github.io): this web site and project administration

### Offering suggestions or concerns 

If you would like to contribute directly to the project, please follow the GitHub workflow described below to modify the affected document and submit a pull request to the team.
If you just want to offer a suggestion or raise a concern, navigate to the appropriate repository: [standard](https://github.com/open-dc-grid/standard), 
[implementation](https://github.com/open-dc-grid/implementation) or [project / web site](https://github.com/open-dc-grid/open-dc-grid.github.io) and click
on the issues tab on the page as shown in the following screen shot:

![Issues tab](./images/IssuesScreenShot.png)

This will take you to an issues page with a New Issue button where you can describe your concern. Submitting an issue notifies the team and one of us will respond to your concern.

### GitHub workflow

With GitHub as the backend, the development of this specification applies well-established collaboration workflows as used in software development.

If you are not yet familiar with the git-based collaboration, the easiest way is probably to use the GitHub web interface:

1. Fork the repository to your personal GitHub account.
2. Create a new branch in your account named after what you want to change.
3. Modify or add files and commit the changes.
4. Submit a pull request via the GitHub web interface and wait for the response of other contributors or reviewers.

Small changes can be made using the editor on the GitHub web site from within your browser so you don't need to install any tools on your PC. 
For more complex changes it can be convenient to clone a repository to copy all the source files to your local PC. You then create a branch, make your changes and push the branch back to your own fork on GitHub.
When you are satisfied with your changes, submit a pull request to the Open DC Grid team.

Note that Git is supported by many of the popular integrated development environments such as Windows [Visual Studio](https://visualstudio.microsoft.com/) (including the free [Community Edition](https://visualstudio.microsoft.com/vs/community/),
[Apple XCode](https://developer.apple.com/xcode/), [Eclipse](https://www.eclipse.org/ide/) and others. The GitHub site offers a GUI tool [GitHub Desktop](https://desktop.github.com/) that can be installed on Windows, Mac or Linux.
Using an IDE can be easier for people unused to command line tools but many developers prefer to use Git directly from the command line with their favorite text editor.
The free editor [Atom](https://atom.io/) and others include tools to view the formatted version of markdown files which can be helpful to see the formatted version of your text.



#### Important remarks:

- Better make several small [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit#Atomic_commit_convention) than
  a single big one
- Use meaningful commit messages. Tell *what* was changed and not that *something* was changed. "Grid stability:
  Voltage graph added" is much better than "Updates". You can also reference an issue with its numer (e.g. #123) in the commit message

### VuePress

This page is developed using VuePress. The content is written in the easy to learn markdown syntax. The link at the bottom of each page guides you to the correct file for modifications.

See the [VuePress documentation](https://vuepress.vuejs.org/guide/) for more details.
