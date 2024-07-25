"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import CardDisplay from "./CardDisplay";
import { ComponentCard } from "@/components/ui/ComponentCards/ComponentCard";
import { ChevronRight, Gift, SquareArrowOutUpRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionContent,
} from "@components/Accordion/Accordion";
import Alert from "@components/Alert/Alert";
import AlertTitle from "@components/Alert/AlertTitle";
import AlertDescription from "@components/Alert/AlertDescription";
import Avatar from "@components/Avatar/Avatar";
import Button from "@components/Button/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardBody,
  CardContainer,
  CardIcon,
  CardLink,
} from "@components/Card/Card";
import Checkbox from "@components/Checkbox/Checkbox";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownContent,
  DropdownLabel,
} from "@components/Dropdown/Dropdown";
import { Input } from "@components/Input/Input";
import Radio from "@components/Radio/Radio";
import { TextArea } from "@components/TextArea/TextArea";
import { Toggle } from "@components/Toggle/Toggle";
import ToggleSwitch from "./ToggleSwitch";

const Section: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = (checked: boolean) => {
    setSidebarVisible(checked);
  };

  const components = [
    {
      id: "Accordion",
      title: "Accordion",
      description: "An accordion component with expand/collapse functionality.",
      buttonLink: "/docs/accordion",
      content: (
        <Accordion
          variant="rounded"
          border={true}
          className="gap-2 w-full md:w-[400px]"
        >
          <AccordionItem index={0}>
            <AccordionButton>Section 1</AccordionButton>
            <AccordionContent>Content for section 1</AccordionContent>
          </AccordionItem>
          <AccordionItem index={1}>
            <AccordionButton>Section 2</AccordionButton>
            <AccordionContent>Content for section 2</AccordionContent>
          </AccordionItem>
          <AccordionItem index={2}>
            <AccordionButton>Section 3</AccordionButton>
            <AccordionContent>Content for section 3</AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },
    {
      id: "Card",
      title: "Card",
      description: "A Card component to display content.",
      buttonLink: "/docs/card",
      content: (
        <ComponentCard>
          <Card>
            <CardContainer>
              <CardHeader>
                <CardIcon>
                  <Gift className="h-10 w-10" />
                </CardIcon>
                <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
              </CardHeader>
              <CardBody>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </CardBody>
              <CardFooter>
                <CardLink
                  href={"/backgrounds"}
                  className="cursor-pointer flex flex-row items-center"
                >
                  <p>See your guidelines</p>
                  <CardIcon>
                    <SquareArrowOutUpRight className="ml-3 h-4 w-4 text-[#F65571] mt-2" />
                  </CardIcon>
                </CardLink>
              </CardFooter>
            </CardContainer>
          </Card>
        </ComponentCard>
      ),
    },
    {
      id: "Alert",
      title: "Alert",
      description: "An alert component to display messages.",
      buttonLink: "/docs/alert",
      content: (
        <Alert dismissAfter={200000} className="w-full md:w-[400px]">
          <AlertTitle>This is alert title!</AlertTitle>
          <AlertDescription>This is alert description!</AlertDescription>
        </Alert>
      ),
    },
    {
      id: "Avatar",
      title: "Avatar",
      description: "An avatar component to display user profile images.",
      buttonLink: "/docs/avatar",
      content: (
        <>
          <Avatar isRounded={false} location="top-right" />
          <Avatar status="online" />
        </>
      ),
    },
    {
      id: "Button",
      title: "Button",
      description: "A button component to trigger actions.",
      buttonLink: "/docs/button",
      content: <Button variant="success">Don't you dare</Button>,
    },
    {
      id: "Checkbox",
      title: "Checkbox",
      description: "A checkbox component to select options.",
      buttonLink: "/docs/checkbox",
      content: <Checkbox label="Label" />,
    },
    {
      id: "Dropdown",
      title: "Dropdown",
      description: "A dropdown component to select options.",
      buttonLink: "/docs/dropdown",
      content: (
        <Dropdown>
          <DropdownButton defaultText="Select an option" />
          <DropdownContent>
            <DropdownLabel>Options</DropdownLabel>
            <DropdownItem value="Option 1">Option 1</DropdownItem>
            <DropdownItem value="Option 2">Option 2</DropdownItem>
            <DropdownItem value="Option 3">Option 3</DropdownItem>
          </DropdownContent>
        </Dropdown>
      ),
    },
    {
      id: "Input",
      title: "Input",
      description: "An input component to enter data.",
      buttonLink: "/docs/input",
      content: (
        <Input
          placeholder="Enter some text"
          type="password"
          showIcon={true}
          variant="error"
          className="input-field"
        />
      ),
    },
    {
      id: "Radio",
      title: "Radio",
      description: "A radio component to select options.",
      buttonLink: "/docs/radio",
      content: <Radio label="Label" />,
    },
    {
      id: "Textarea",
      title: "Textarea",
      description: "A textarea component to enter multiple lines of text.",
      buttonLink: "/docs/textarea",
      content: <TextArea placeholder="Enter your text here..." variant="" />,
    },
    {
      id: "Toggle",
      title: "Toggle",
      description: "A toggle component to switch between two states.",
      buttonLink: "/docs/toggle",
      content: <Toggle label="Default Toggle" />,
    },
  ];

  return (
    <div className="flex mt-28">
      <div
        className={`relative ${sidebarVisible ? "block" : "hidden"} md:block`}
      >
        <Sidebar />
      </div>
      <div className="flex-grow p-6 text-white mr-8 md:ml-[240px] ml-6">
        <div className="md:hidden absolute top-28 left-0 mt-8">
          <ToggleSwitch onChange={toggleSidebar} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {components.map((component) => (
            <div key={component.id} id={component.id} className="mb-6">
              <CardDisplay
                title={component.title}
                description={component.description}
                buttonText="Try Now"
                buttonLink={component.buttonLink}
                buttonIcon={<ChevronRight className="h-6 w-6" />}
              >
                {component.content}
              </CardDisplay>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
