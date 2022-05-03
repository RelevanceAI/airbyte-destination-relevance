"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6119],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={},l="Building a Python Destination",p={unversionedId:"connector-development/tutorials/building-a-python-destination",id:"connector-development/tutorials/building-a-python-destination",title:"Building a Python Destination",description:"Summary",source:"@site/../docs/connector-development/tutorials/building-a-python-destination.md",sourceDirName:"connector-development/tutorials",slug:"/connector-development/tutorials/building-a-python-destination",permalink:"/connector-development/tutorials/building-a-python-destination",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/tutorials/building-a-python-destination.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Building a Python Source",permalink:"/connector-development/tutorials/building-a-python-source"},next:{title:"Building a Java Destination",permalink:"/connector-development/tutorials/building-a-java-destination"}},d={},c=[{value:"Summary",id:"summary",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Checklist",id:"checklist",level:2},{value:"Creating a destination",id:"creating-a-destination",level:3},{value:"Explaining Each Step",id:"explaining-each-step",level:2},{value:"Step 1: Create the destination using the template",id:"step-1-create-the-destination-using-the-template",level:3},{value:"Step 2: Setup the dev environment",id:"step-2-setup-the-dev-environment",level:3},{value:"Dependencies",id:"dependencies",level:4},{value:"Iterating on your implementation",id:"iterating-on-your-implementation",level:4},{value:"Step 3: Implement <code>spec</code>",id:"step-3-implement-spec",level:3},{value:"Step 4: Implement <code>check</code>",id:"step-4-implement-check",level:3},{value:"Step 5: Implement <code>write</code>",id:"step-5-implement-write",level:3},{value:"Step 6: Set up Acceptance Tests",id:"step-6-set-up-acceptance-tests",level:3},{value:"Step 7: Write unit tests and/or integration tests",id:"step-7-write-unit-tests-andor-integration-tests",level:3},{value:"Step 8: Update the docs",id:"step-8-update-the-docs",level:4},{value:"Wrapping up",id:"wrapping-up",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-a-python-destination"},"Building a Python Destination"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This article provides a checklist for how to create a Python destination. Each step in the checklist has a link to a more detailed explanation below."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Docker and Python with the versions listed in the ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/tech-stack"},"tech stack section"),". You can use any Python version between 3.7 and 3.9, but this tutorial was tested with 3.7."),(0,o.kt)("h2",{id:"checklist"},"Checklist"),(0,o.kt)("h3",{id:"creating-a-destination"},"Creating a destination"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Step 1: Create the destination using the template generator"),(0,o.kt)("li",{parentName:"ul"},"Step 2: Setup the virtual environment "),(0,o.kt)("li",{parentName:"ul"},"Step 3: Implement ",(0,o.kt)("inlineCode",{parentName:"li"},"spec")," to define the configuration required to run the connector"),(0,o.kt)("li",{parentName:"ul"},"Step 4: Implement ",(0,o.kt)("inlineCode",{parentName:"li"},"check")," to provide a way to validate configurations provided to the connector"),(0,o.kt)("li",{parentName:"ul"},"Step 5: Implement ",(0,o.kt)("inlineCode",{parentName:"li"},"write")," to write data to the destination"),(0,o.kt)("li",{parentName:"ul"},"Step 6: Set up Acceptance Tests"),(0,o.kt)("li",{parentName:"ul"},"Step 7: Write unit tests or integration tests"),(0,o.kt)("li",{parentName:"ul"},"Step 8: Update the docs ","(","in ",(0,o.kt)("inlineCode",{parentName:"li"},"docs/integrations/destinations/<destination-name>.md"),")")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you need help with any step of the process, feel free to submit a PR with your progress and any questions you have, or ask us on ",(0,o.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"slack"),". Also reference the KvDB python destination implementation if you want to see an example of a working destination."))),(0,o.kt)("h2",{id:"explaining-each-step"},"Explaining Each Step"),(0,o.kt)("h3",{id:"step-1-create-the-destination-using-the-template"},"Step 1: Create the destination using the template"),(0,o.kt)("p",null,"Airbyte provides a code generator which bootstraps the scaffolding for our connector."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd airbyte-integrations/connector-templates/generator # assumes you are starting from the root of the Airbyte project.\n$ ./generate.sh\n")),(0,o.kt)("p",null,"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Python Destination")," template and then input the name of your connector. We'll refer to the destination as ",(0,o.kt)("inlineCode",{parentName:"p"},"destination-<name>")," in this tutorial, but you should replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<name>")," with the actual name you used for your connector e.g: ",(0,o.kt)("inlineCode",{parentName:"p"},"redis")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"google-sheets"),"."),(0,o.kt)("h3",{id:"step-2-setup-the-dev-environment"},"Step 2: Setup the dev environment"),(0,o.kt)("p",null,"Setup your Python virtual environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd airbyte-integrations/connectors/destination-<name>\n\n# Create a virtual environment in the .venv directory\npython -m venv .venv \n\n# activate the virtualenv\nsource .venv/bin/activate \n\n# Install with the \"tests\" extra which provides test requirements\npip install '.[tests]'\n")),(0,o.kt)("p",null,"This step sets up the initial python environment. ",(0,o.kt)("strong",{parentName:"p"},"All")," subsequent ",(0,o.kt)("inlineCode",{parentName:"p"},"python")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pip")," commands assume you have activated your virtual environment."),(0,o.kt)("p",null,"If you want your IDE to auto complete and resolve dependencies properly, point it at the python binary in ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/destination-<name>/.venv/bin/python"),". Also anytime you change the dependencies in the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup.py")," make sure to re-run the build command. The build system will handle installing all dependencies in the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup.py")," into the virtual environment."),(0,o.kt)("p",null,"Let's quickly get a few housekeeping items out of the way."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Python dependencies for your destination should be declared in ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/destination-<name>/setup.py")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"install_requires")," field. You might notice that a couple of Airbyte dependencies are already declared there ","(","mainly the Airbyte CDK and potentially some testing libraries or helpers",")",". Keep those as they will be useful during development."),(0,o.kt)("p",null,"You may notice that there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," in your destination's directory as well. Do not touch this. It is autogenerated and used to install local Airbyte dependencies which are not published to PyPI. All your dependencies should be declared in ",(0,o.kt)("inlineCode",{parentName:"p"},"setup.py"),"."),(0,o.kt)("h4",{id:"iterating-on-your-implementation"},"Iterating on your implementation"),(0,o.kt)("p",null,"Pretty much all it takes to create a destination is to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination")," interface. Let's briefly recap the three methods implemented by a Destination:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"spec"),": declares the user-provided credentials or configuration needed to run the connector"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"check"),": tests if the user-provided configuration can be used to connect to the underlying data destination, and with the correct write permissions"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"write"),": writes data to the underlying destination by reading a configuration, a stream of records from stdin, and a configured catalog describing the schema of the data and how it should be written to the destination")),(0,o.kt)("p",null,"The destination interface is described in detail in the ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-specification"},"Airbyte Specification")," reference."),(0,o.kt)("p",null,"The generated files fill in a lot of information for you and have docstrings describing what you need to do to implement each method. The next few steps are just implementing that interface."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All logging should be done through the ",(0,o.kt)("inlineCode",{parentName:"p"},"self.logger")," object available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination")," class. Otherwise, logs will not be shown properly in the Airbyte UI."))),(0,o.kt)("p",null,"Everyone develops differently but here are 3 ways that we recommend iterating on a destination. Consider using whichever one matches your style."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Run the destination using Python")),(0,o.kt)("p",null,"You'll notice in your destination's directory that there is a python file called ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py"),". This file is the entrypoint for the connector:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# from airbyte-integrations/connectors/destination-<name>\npython main.py spec\npython main.py check --config secrets/config.json\n# messages.jsonl should contain AirbyteMessages (described in the Airbyte spec)\ncat messages.jsonl | python main.py write --config secrets/config.json --catalog sample_files/configured_catalog.json\n")),(0,o.kt)("p",null,"The nice thing about this approach is that you can iterate completely within in python. The downside is that you are not quite running your destination as it will actually be run by Airbyte. Specifically you're not running it from within the docker container that will house it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Run using Docker")," If you want to run your destination exactly as it will be run by Airbyte ","(","i.e. within a docker container",")",", you can use the following commands from the connector module directory ","(",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/destination-<name>"),")",":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# First build the container\ndocker build . -t airbyte/destination-<name>:dev\n\n# Then use the following commands to run it\ndocker run --rm airbyte/destination-<name>:dev spec\ndocker run --rm -v $(pwd)/secrets:/secrets airbyte/destination-<name>:dev check --config /secrets/config.json\ncat messages.jsonl | docker run --rm -v $(pwd)/secrets:/secrets -v $(pwd)/sample_files:/sample_files airbyte/destination-<name>:dev read --config /secrets/config.json --catalog /sample_files/configured_catalog.json\n")),(0,o.kt)("p",null,"Note: Each time you make a change to your implementation you need to re-build the connector image. ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build . -t airbyte/destination-<name>:dev"),". This ensures the new python code is added into the docker container."),(0,o.kt)("p",null,"The nice thing about this approach is that you are running your source exactly as it will be run by Airbyte. The tradeoff is that iteration is slightly slower, because you need to re-build the connector between each change."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TDD using standard tests")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"note: these tests aren't yet available for Python connectors but will be very soon. Until then you should use custom unit or integration tests for TDD"),"."),(0,o.kt)("p",null,'Airbyte provides a standard test suite that is run against every destination. The objective of these tests is to provide some "free" tests that can sanity check that the basic functionality of the destination works. One approach to developing your connector is to simply run the tests between each change and use the feedback from them to guide your development.'),(0,o.kt)("p",null,"If you want to try out this approach, check out Step 6 which describes what you need to do to set up the standard tests for your destination."),(0,o.kt)("p",null,"The nice thing about this approach is that you are running your destination exactly as Airbyte will run it in the CI. The downside is that the tests do not run very quickly."),(0,o.kt)("h3",{id:"step-3-implement-spec"},"Step 3: Implement ",(0,o.kt)("inlineCode",{parentName:"h3"},"spec")),(0,o.kt)("p",null,"Each destination contains a specification written in JsonSchema that describes the inputs it requires and accepts. Defining the specification is a good place to start development. To do this, find the spec file generated in ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/destination-<name>/src/main/resources/spec.json"),". Edit it and you should be done with this step. The generated connector will take care of reading this file and converting it to the correct output."),(0,o.kt)("p",null,"Some notes about fields in the output spec:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"supportsNormalization")," is a boolean which indicates if this connector supports ",(0,o.kt)("a",{parentName:"li",href:"https://docs.airbyte.io/understanding-airbyte/basic-normalization"},"basic normalization via DBT"),". If true, ",(0,o.kt)("inlineCode",{parentName:"li"},"supportsDBT")," must also be true. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"supportsDBT")," is a boolean which indicates whether this destination is compatible with DBT. If set to true, the user can define custom DBT transformations that run on this destination after each successful sync. This must be true if ",(0,o.kt)("inlineCode",{parentName:"li"},"supportsNormalization")," is set to true."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"supported_destination_sync_modes"),": An array of strings declaring the sync modes supported by this connector. The available options are: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"overwrite"),": The connector can be configured to wipe any existing data in a stream before writing new data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"append"),": The connector can be configured to append new data to existing data "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"append_dedupe"),": The connector can be configured to deduplicate ","(","i.e: UPSERT",")"," data in the destination based on the new data and primary keys"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"supportsIncremental"),": Whether the connector supports any ",(0,o.kt)("inlineCode",{parentName:"li"},"append")," sync mode. Must be set to true if ",(0,o.kt)("inlineCode",{parentName:"li"},"append")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"append_dedupe")," are included in the ",(0,o.kt)("inlineCode",{parentName:"li"},"supported_destination_sync_modes"),".  ")),(0,o.kt)("p",null,"Some helpful resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://json-schema.org/"},(0,o.kt)("strong",{parentName:"a"},"JSONSchema website"))," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-protocol/models/src/main/resources/airbyte_protocol/airbyte_protocol.yaml"},(0,o.kt)("strong",{parentName:"a"},"Definition of Airbyte Protocol data models")),". The output of ",(0,o.kt)("inlineCode",{parentName:"li"},"spec")," is described by the ",(0,o.kt)("inlineCode",{parentName:"li"},"ConnectorSpecification")," model ","(","which is wrapped in an ",(0,o.kt)("inlineCode",{parentName:"li"},"AirbyteConnectionStatus")," message",")",". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-postgres/src/main/resources/spec.json"},(0,o.kt)("strong",{parentName:"a"},"Postgres Destination's spec.json file"))," as an example ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.json"),".")),(0,o.kt)("p",null,"Once you've edited the file, see the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec")," operation in action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py spec\n")),(0,o.kt)("h3",{id:"step-4-implement-check"},"Step 4: Implement ",(0,o.kt)("inlineCode",{parentName:"h3"},"check")),(0,o.kt)("p",null,"The check operation accepts a JSON object conforming to the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.json"),". In other words if the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.json")," said that the destination requires a ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"password"),", the config object might be ",(0,o.kt)("inlineCode",{parentName:"p"},'{ "username": "airbyte", "password": "password123" }'),". It returns a json object that reports, given the credentials in the config, whether we were able to connect to the destination."),(0,o.kt)("p",null,"While developing, we recommend storing any credentials in ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets/config.json"),". Any ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets")," directory in the Airbyte repo is gitignored by default."),(0,o.kt)("p",null,"Implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"check")," method in the generated file ",(0,o.kt)("inlineCode",{parentName:"p"},"destination_<name>/destination.py"),". Here's an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-kvdb/destination_kvdb/destination.py"},"example implementation")," from the KvDB destination."),(0,o.kt)("p",null,"Verify that the method is working by placing your config in ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets/config.json")," then running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py check --config secrets/config.json\n")),(0,o.kt)("h3",{id:"step-5-implement-write"},"Step 5: Implement ",(0,o.kt)("inlineCode",{parentName:"h3"},"write")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"write"),' operation is the main workhorse of a destination connector: it reads input data from the source and writes it to the underlying destination. It takes as input the config file used to run the connector as well as the configured catalog: the file used to describe the schema of the incoming data and how it should be written to the destination. Its "output" is two things:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Data written to the underlying destination"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"AirbyteMessage"),"s of type ",(0,o.kt)("inlineCode",{parentName:"li"},"AirbyteStateMessage"),", written to stdout to indicate which records have been written so far during a sync. It's important to output these messages when possible in order to avoid re-extracting messages from the source. See the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.airbyte.io/understanding-airbyte/airbyte-specification#write"},"write operation protocol reference")," for more information.")),(0,o.kt)("p",null,"To implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," Airbyte operation, implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," method in your generated ",(0,o.kt)("inlineCode",{parentName:"p"},"destination.py")," file. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-kvdb/destination_kvdb/destination.py"},"Here is an example implementation")," from the KvDB destination connector."),(0,o.kt)("h3",{id:"step-6-set-up-acceptance-tests"},"Step 6: Set up Acceptance Tests"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Coming soon. These tests are not yet available for Python destinations but will be very soon. For now please skip this step and rely on copious amounts of integration and unit testing"),"."),(0,o.kt)("h3",{id:"step-7-write-unit-tests-andor-integration-tests"},"Step 7: Write unit tests and/or integration tests"),(0,o.kt)("p",null,"The Acceptance Tests are meant to cover the basic functionality of a destination. Think of it as the bare minimum required for us to add a destination to Airbyte. You should probably add some unit testing or custom integration testing in case you need to test additional functionality of your destination."),(0,o.kt)("p",null,"Add unit tests in ",(0,o.kt)("inlineCode",{parentName:"p"},"unit_tests/")," directory and integration tests in the ",(0,o.kt)("inlineCode",{parentName:"p"},"integration_tests/")," directory. Run them via"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python -m pytest -s -vv integration_tests/\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/destination-kvdb/integration_tests/integration_test.py"},"KvDB integration tests")," for an example of tests you can implement."),(0,o.kt)("h4",{id:"step-8-update-the-docs"},"Step 8: Update the docs"),(0,o.kt)("p",null,"Each connector has its own documentation page. By convention, that page should have the following path: in ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/integrations/destinations/<destination-name>.md"),". For the documentation to get packaged with the docs, make sure to add a link to it in ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/SUMMARY.md"),". You can pattern match doing that from existing connectors."),(0,o.kt)("h2",{id:"wrapping-up"},"Wrapping up"),(0,o.kt)("p",null,"Well done on making it this far! If you'd like your connector to ship with Airbyte by default, create a PR against the Airbyte repo and we'll work with you to get it across the finish line."))}h.isMDXComponent=!0}}]);