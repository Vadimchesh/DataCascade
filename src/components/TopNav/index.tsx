import * as React from 'react';

import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
    {
        title: 'Manage Lakehouse projects',
        href: '/docs',
        description: 'Manage and visualize the data lakehouse infrastructure and its configurations.',
    },
    {
        title: 'Manage Access ',
        href: '/docs',
        description: 'Accss control and management of the data lakehouse infrastructure and its configurations.',
    },
    {
        title: 'Manage Lakehouse infrastructure',
        href: '/docs',
        description: 'Manage and visualize the data lakehouse infrastructure and its configurations.',
    },
    {
        title: 'Model and explore Data Assets',
        href: '/docs',
        description: 'Manage models and explore data assets in the data lakehouse infrastructure and its configurations.',
    },
    {
        title: 'Define Transformations',
        href: '/docs',
        description: 'Define transformations in the data lakehouse infrastructure and its configurations.',
    },
    {
        title: 'Ingest Data',
        href: '/docs',
        description:
            'A set of options for selecting a value from a list, or picking a date from a calendar, or entering a freeform text value.',
    },
    {
        title: 'Orchestrate Pipelines',
        href: '/docs',
        description: 'Define and orchestrate pipelines in the data lakehouse infrastructure and its configurations.',
    },
    {
        title: 'Govern Data Assets',
        href: '/docs',
        description: 'Govern data assets in the data lakehouse infrastructure and its configurations.',
    },
    {
        title: 'Create Dashboards',
        href: '/docs',
        description: 'Create and visualize dashboards in the data lakehouse infrastructure and its configurations.',
    },
    {
        title: 'Manage Deployments',
        href: '/docs',
        description: 'Manage and visualize the data lakehouse infrastructure and its configurations.',
    },
];

export function TopNav() {
    return (
        <NavigationMenu className="absolute p-3">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">IBA Lakehouse Control Plane</div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Visualization of this complex infrastructure and provide interactive interface for managing its
                                            configurations.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Feature">
                                Description of the feature
                            </ListItem>
                            <ListItem href="/docs" title="Feature">
                                Description of the feature
                            </ListItem>
                            <ListItem href="/docs/" title="Feature">
                                Description of the feature
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem key={component.title} title={component.title} href={component.href}>
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="/docs">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = 'ListItem';
