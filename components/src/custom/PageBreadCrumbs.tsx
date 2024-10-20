'use server';

import { Breadcrumbs } from "@mui/material";
import MuiLink from "../link/Link";
import Link from "next/link";
import { formatToLabel, isUUID } from "../helper/component";
import MuiTypography from "../typography/Typograph";
import { headers } from "next/headers";

type IPageBreadCrumbs = {
  route: string;
  pathNames?: string[];
};

type IRoute = {
  name: string;
  href: string;
};

export const PageBreadCrumbs: React.FC<IPageBreadCrumbs> = (props) => {
  const { route, pathNames = [] } = props;

  const headersList = headers();
  const currentUrl = headersList.get("x-current-path") || headersList.get("host");

  const path = new URL(currentUrl || "", "http://localhost").pathname;

  let currentRoute = `${route}`;
  const routes: IRoute[] = [];

  const activeRoute = path.replace(`${route}/`, "");
  const paths = activeRoute.split("/");
  const names = pathNames;
  paths.forEach((path) => {
    const isPathUUID = isUUID(path);
    let name = formatToLabel(path);
    if (isPathUUID && names.length) {
      name = names[0];
      names.pop();
    }
    routes.push({
      name: name,
      href: `${currentRoute}/${path}`,
    });
    currentRoute = currentRoute.concat(`/${path}`);
  });

  return (
    <Breadcrumbs className="p-2">
      {routes.map((item) => (
        <MuiLink key={item.name} href={item.href} component={Link}>
          <MuiTypography className="truncate" maxWidth={400}>
            {item.name}
          </MuiTypography>
        </MuiLink>
      ))}
    </Breadcrumbs>
  );
};

