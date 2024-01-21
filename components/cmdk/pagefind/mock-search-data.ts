// https://github.com/vercel/turbo/blob/main/docs/lib/mock-search-data.ts

import type { PagefindSearchFragment } from "./types";

export const mockSearchData = [
  {
    id: "en_2c55a7b",
    score: 6.299574,
    words: [1, 9, 45, 51, 70, 192, 217, 242, 260, 268, 288, 294, 313, 468, 483],
    data: {
      url: "/_next/static/chunks/server/pages/repo/docs/reference/command-line-reference/prune.html",
      content:
        "turbo prune <scope>... Generate a sparse/partial monorepo with a pruned lockfile for a target workspace. This command will generate folder called out with the following inside of it: The full source code of all internal workspaces that are needed to build the target. A new pruned lockfile that only contains the pruned subset of the original root lockfile with the dependencies that are actually used by the workspaces in the pruned workspace. A copy of the root package.json. . # Folder full source code for all workspaces needed to build the target ├── package.json # The root `package.json` ├── packages │ ├── ui │ │ ├── package.json │ │ ├── src │ │ │ └── index.tsx │ │ └── tsconfig.json │ ├── shared │ │ ├── package.json │ │ ├── src │ │ │ ├── __tests__ │ │ │ │ ├── sum.test.ts │ │ │ │ └── tsconfig.json │ │ │ ├── index.ts │ │ │ └── sum.ts │ │ └── tsconfig.json │ └── frontend │ ├── next-env.d.ts │ ├── next.config.js │ ├── package.json │ ├── src │ │ └── pages │ │ └── index.tsx │ └── tsconfig.json └── yarn.lock # The pruned lockfile for all targets in the subworkspace Options --docker type: boolean. Default to false. Passing this flag will alter the outputted folder with the pruned workspace to make it easier to use with Docker best practices / layer caching (opens in a new tab). With the --docker flag. The prune command will generate folder called out with the following inside of it: A folder json with the pruned workspace's package.jsons. A folder full with the pruned workspace's full source code, but only including the internal packages that are needed to build the target. A new pruned lockfile that only contains the pruned subset of the original root lockfile with the dependencies that are actually used by the packages in the pruned workspace. . ├── full # Folder full source code for all package needed to build the target │ ├── package.json │ └── packages │ ├── ui │ │ ├── package.json │ │ ├── src │ │ │ └── index.tsx │ │ └── tsconfig.json │ ├── shared │ │ ├── package.json │ │ ├── src │ │ │ ├── __tests__ │ │ │ │ ├── sum.test.ts │ │ │ │ └── tsconfig.json │ │ │ ├── index.ts │ │ │ └── sum.ts │ │ └── tsconfig.json │ └── frontend │ ├── next-env.d.ts │ ├── next.config.js │ ├── package.json │ ├── src │ │ └── pages │ │ └── index.tsx │ └── tsconfig.json ├── json # Folder containing just package.jsons for all targets in the subworkspace │ ├── package.json │ └── packages │ ├── ui │ │ └── package.json │ ├── shared │ │ └── package.json │ └── frontend │ └── package.json └── yarn.lock # The pruned lockfile for all targets in the subworkspace --out-dir Default: ./out. Customize the directory the pruned output is generated in.",
      word_count: 488,
      filters: {},
      meta: {
        title: "turbo prune <scope>...",
      },
      anchors: [
        {
          element: "a",
          id: "options",
          text: "",
          location: 201,
        },
        {
          element: "a",
          id: "--docker",
          text: "",
          location: 202,
        },
        {
          element: "a",
          id: "--out-dir",
          text: "",
          location: 477,
        },
      ],
      weighted_locations: [
        {
          weight: 7,
          balanced_score: 58784.535,
          location: 1,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 9,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 45,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 51,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 70,
        },
        {
          weight: 0.5,
          balanced_score: 299.92108,
          location: 192,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 217,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 242,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 260,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 268,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 288,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 294,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 313,
        },
        {
          weight: 0.5,
          balanced_score: 299.92108,
          location: 468,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 483,
        },
      ],
      locations: [
        1, 9, 45, 51, 70, 192, 217, 242, 260, 268, 288, 294, 313, 468, 483,
      ],
      raw_content:
        "turbo prune &lt;scope&gt;... Generate a sparse/partial monorepo with a pruned lockfile for a target workspace. This command will generate folder called out with the following inside of it: The full source code of all internal workspaces that are needed to build the target. A new pruned lockfile that only contains the pruned subset of the original root lockfile with the dependencies that are actually used by the workspaces in the pruned workspace. A copy of the root package.json. . # Folder full source code for all workspaces needed to build the target ├── package.json # The root `package.json` ├── packages │ ├── ui │ │ ├── package.json │ │ ├── src │ │ │ └── index.tsx │ │ └── tsconfig.json │ ├── shared │ │ ├── package.json │ │ ├── src │ │ │ ├── __tests__ │ │ │ │ ├── sum.test.ts │ │ │ │ └── tsconfig.json │ │ │ ├── index.ts │ │ │ └── sum.ts │ │ └── tsconfig.json │ └── frontend │ ├── next-env.d.ts │ ├── next.config.js │ ├── package.json │ ├── src │ │ └── pages │ │ └── index.tsx │ └── tsconfig.json └── yarn.lock # The pruned lockfile for all targets in the subworkspace Options --docker type: boolean. Default to false. Passing this flag will alter the outputted folder with the pruned workspace to make it easier to use with Docker best practices / layer caching (opens in a new tab). With the --docker flag. The prune command will generate folder called out with the following inside of it: A folder json with the pruned workspace's package.jsons. A folder full with the pruned workspace's full source code, but only including the internal packages that are needed to build the target. A new pruned lockfile that only contains the pruned subset of the original root lockfile with the dependencies that are actually used by the packages in the pruned workspace. . ├── full # Folder full source code for all package needed to build the target │ ├── package.json │ └── packages │ ├── ui │ │ ├── package.json │ │ ├── src │ │ │ └── index.tsx │ │ └── tsconfig.json │ ├── shared │ │ ├── package.json │ │ ├── src │ │ │ ├── __tests__ │ │ │ │ ├── sum.test.ts │ │ │ │ └── tsconfig.json │ │ │ ├── index.ts │ │ │ └── sum.ts │ │ └── tsconfig.json │ └── frontend │ ├── next-env.d.ts │ ├── next.config.js │ ├── package.json │ ├── src │ │ └── pages │ │ └── index.tsx │ └── tsconfig.json ├── json # Folder containing just package.jsons for all targets in the subworkspace │ ├── package.json │ └── packages │ ├── ui │ │ └── package.json │ ├── shared │ │ └── package.json │ └── frontend │ └── package.json └── yarn.lock # The pruned lockfile for all targets in the subworkspace --out-dir Default: ./out. Customize the directory the pruned output is generated in.",
      raw_url:
        "/server/pages/repo/docs/reference/command-line-reference/prune.html",
      excerpt:
        "turbo <mark>prune</mark> &lt;scope&gt;... Generate a sparse/partial monorepo with a <mark>pruned</mark> lockfile for a target workspace. This command will generate folder called out with the following inside of it: The full",
      sub_results: [
        {
          title: "turbo prune <scope>...",
          url: "/_next/static/chunks/server/pages/repo/docs/reference/command-line-reference/prune.html",
          weighted_locations: [
            {
              weight: 7,
              balanced_score: 58784.535,
              location: 1,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 9,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 45,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 51,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 70,
            },
            {
              weight: 0.5,
              balanced_score: 299.92108,
              location: 192,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 217,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 242,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 260,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 268,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 288,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 294,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 313,
            },
            {
              weight: 0.5,
              balanced_score: 299.92108,
              location: 468,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 483,
            },
          ],
          locations: [
            1, 9, 45, 51, 70, 192, 217, 242, 260, 268, 288, 294, 313, 468, 483,
          ],
          excerpt:
            "turbo <mark>prune</mark> &lt;scope&gt;... Generate a sparse/partial monorepo with a <mark>pruned</mark> lockfile for a target workspace. This command will generate folder called out with the following inside of it: The full",
        },
      ],
    },
  },
  {
    id: "en_aa8416b",
    score: 0.42313924,
    words: [328, 347, 349, 357, 377, 395, 524, 547, 616],
    data: {
      url: "/_next/static/chunks/server/pages/repo/docs/handbook/deploying-with-docker.html",
      content:
        "Deploying with Docker. Building a Docker (opens in a new tab) image is a common way to deploy all sorts of applications. However, doing so from a monorepo has several challenges. The problem TL;DR: In a monorepo, unrelated changes can make Docker do unnecessary work when deploying your app. Let's imagine you have a monorepo that looks like this: ├── apps │ ├── docs │ │ ├── server.js │ │ └── package.json │ └── web │ └── package.json ├── package.json └── package-lock.json You want to deploy apps/docs using Docker, so you create a Dockerfile: FROM node:16 WORKDIR /usr/src/app # Copy root package.json and lockfile COPY package.json ./ COPY package-lock.json ./ # Copy the docs package.json COPY apps/docs/package.json ./apps/docs/package.json RUN npm install # Copy app source COPY . . EXPOSE 8080 CMD [ \"node\", \"apps/docs/server.js\" ] This will copy the root package.json and the root lockfile to the docker image. Then, it'll install dependencies, copy the app source and start the app. You should also create a .dockerignore file to prevent node_modules from being copied in with the app's source. node_modules npm-debug.log The lockfile changes too often Docker is pretty smart about how it deploys your apps. Just like Turbo, it tries to do as little work as possible (opens in a new tab). In our Dockerfile's case, it will only run npm install if the files it has in its image are different from the previous run. If not, it'll restore the node_modules directory it had before. This means that whenever package.json, apps/docs/package.json or package-lock.json change, the docker image will run npm install. This sounds great - until we realise something. The package-lock.json is global for the monorepo. That means that if we install a new package inside apps/web, we'll cause apps/docs to redeploy. In a large monorepo, this can result in a huge amount of lost time, as any change to a monorepo's lockfile cascades into tens or hundreds of deploys. The solution The solution is to prune the inputs to the Dockerfile to only what is strictly necessary. Turborepo provides a simple solution - turbo prune. turbo prune docs --docker Running this command creates a pruned version of your monorepo inside an ./out directory. It only includes workspaces which docs depends on. Crucially, it also prunes the lockfile so that only the relevant node_modules will be downloaded. The --docker flag By default, turbo prune puts all relevant files inside ./out. But to optimize caching with Docker, we ideally want to copy the files over in two stages. First, we want to copy over only what we need to install the packages. When running --docker, you'll find this inside ./out/json. out ├── json │ ├── apps │ │ └── docs │ │ └── package.json │ └── package.json ├── full │ ├── apps │ │ └── docs │ │ ├── server.js │ │ └── package.json │ ├── package.json │ └── turbo.json └── package-lock.json Afterwards, you can copy the files in ./out/full to add the source files. Splitting up dependencies and source files in this way lets us only run npm install when dependencies change - giving us a much larger speedup. Without --docker, all pruned files are placed inside ./out. Example Our detailed with-docker example (opens in a new tab) goes into depth on how to utilise prune to its full potential. Here's the Dockerfile, copied over for convenience. This Dockerfile is written for a Next.js (opens in a new tab) app that is using the standalone output mode (opens in a new tab). FROM node:18-alpine AS base FROM base AS builder RUN apk add --no-cache libc6-compat RUN apk update # Set working directory WORKDIR /app RUN yarn global add turbo COPY . . RUN turbo prune web --docker # Add lockfile and package.json's of isolated subworkspace FROM base AS installer RUN apk add --no-cache libc6-compat RUN apk update WORKDIR /app # First install the dependencies (as they change less often) COPY .gitignore .gitignore COPY --from=builder /app/out/json/ . COPY --from=builder /app/out/yarn.lock ./yarn.lock RUN yarn install # Build the project COPY --from=builder /app/out/full/ . RUN yarn turbo run build --filter=web... FROM base AS runner WORKDIR /app # Don't run production as root RUN addgroup --system --gid 1001 nodejs RUN adduser --system --uid 1001 nextjs USER nextjs COPY --from=installer /app/apps/web/next.config.js . COPY --from=installer /app/apps/web/package.json . # Automatically leverage output traces to reduce image size # https://nextjs.org/docs/advanced-features/output-file-tracing COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./ COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public CMD node apps/web/server.js Remote caching To take advantage of remote caches during Docker builds, you will need to make sure your build container has credentials to access your Remote Cache. There are many ways to take care of secrets in a Docker image. We will use a simple strategy here with multi-stage builds using secrets as build arguments that will get hidden for the final image. Assuming you are using a Dockerfile similar to the one above, we will bring in some environment variables from build arguments right before turbo build: ARG TURBO_TEAM ENV TURBO_TEAM=$TURBO_TEAM ARG TURBO_TOKEN ENV TURBO_TOKEN=$TURBO_TOKEN RUN yarn turbo run build --filter=web... turbo will now be able to hit your remote cache. To see a Turborepo cache hit for a non-cached Docker build image, run a command like this one from your project root: docker build -f apps/web/Dockerfile . --build-arg TURBO_TEAM=“your-team-name” --build-arg TURBO_TOKEN=“your-token“ --no-cache",
      word_count: 886,
      filters: {},
      meta: {
        title: "Deploying with Docker",
      },
      anchors: [
        {
          element: "a",
          id: "the-problem",
          text: "",
          location: 33,
        },
        {
          element: "a",
          id: "the-lockfile-changes-too-often",
          text: "",
          location: 186,
        },
        {
          element: "a",
          id: "the-solution",
          text: "",
          location: 324,
        },
        {
          element: "a",
          id: "the---docker-flag",
          text: "",
          location: 392,
        },
        {
          element: "a",
          id: "example",
          text: "",
          location: 531,
        },
        {
          element: "a",
          id: "remote-caching",
          text: "",
          location: 744,
        },
      ],
      weighted_locations: [
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 328,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 347,
        },
        {
          weight: 0.5,
          balanced_score: 299.92108,
          location: 349,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 357,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 377,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 395,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 524,
        },
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 547,
        },
        {
          weight: 0.5,
          balanced_score: 299.92108,
          location: 616,
        },
      ],
      locations: [328, 347, 349, 357, 377, 395, 524, 547, 616],
      raw_content:
        "Deploying with Docker. Building a Docker (opens in a new tab) image is a common way to deploy all sorts of applications. However, doing so from a monorepo has several challenges. The problem TL;DR: In a monorepo, unrelated changes can make Docker do unnecessary work when deploying your app. Let's imagine you have a monorepo that looks like this: ├── apps │ ├── docs │ │ ├── server.js │ │ └── package.json │ └── web │ └── package.json ├── package.json └── package-lock.json You want to deploy apps/docs using Docker, so you create a Dockerfile: FROM node:16 WORKDIR /usr/src/app # Copy root package.json and lockfile COPY package.json ./ COPY package-lock.json ./ # Copy the docs package.json COPY apps/docs/package.json ./apps/docs/package.json RUN npm install # Copy app source COPY . . EXPOSE 8080 CMD [ \"node\", \"apps/docs/server.js\" ] This will copy the root package.json and the root lockfile to the docker image. Then, it'll install dependencies, copy the app source and start the app. You should also create a .dockerignore file to prevent node_modules from being copied in with the app's source. node_modules npm-debug.log The lockfile changes too often Docker is pretty smart about how it deploys your apps. Just like Turbo, it tries to do as little work as possible (opens in a new tab). In our Dockerfile's case, it will only run npm install if the files it has in its image are different from the previous run. If not, it'll restore the node_modules directory it had before. This means that whenever package.json, apps/docs/package.json or package-lock.json change, the docker image will run npm install. This sounds great - until we realise something. The package-lock.json is global for the monorepo. That means that if we install a new package inside apps/web, we'll cause apps/docs to redeploy. In a large monorepo, this can result in a huge amount of lost time, as any change to a monorepo's lockfile cascades into tens or hundreds of deploys. The solution The solution is to prune the inputs to the Dockerfile to only what is strictly necessary. Turborepo provides a simple solution - turbo prune. turbo prune docs --docker Running this command creates a pruned version of your monorepo inside an ./out directory. It only includes workspaces which docs depends on. Crucially, it also prunes the lockfile so that only the relevant node_modules will be downloaded. The --docker flag By default, turbo prune puts all relevant files inside ./out. But to optimize caching with Docker, we ideally want to copy the files over in two stages. First, we want to copy over only what we need to install the packages. When running --docker, you'll find this inside ./out/json. out ├── json │ ├── apps │ │ └── docs │ │ └── package.json │ └── package.json ├── full │ ├── apps │ │ └── docs │ │ ├── server.js │ │ └── package.json │ ├── package.json │ └── turbo.json └── package-lock.json Afterwards, you can copy the files in ./out/full to add the source files. Splitting up dependencies and source files in this way lets us only run npm install when dependencies change - giving us a much larger speedup. Without --docker, all pruned files are placed inside ./out. Example Our detailed with-docker example (opens in a new tab) goes into depth on how to utilise prune to its full potential. Here's the Dockerfile, copied over for convenience. This Dockerfile is written for a Next.js (opens in a new tab) app that is using the standalone output mode (opens in a new tab). FROM node:18-alpine AS base FROM base AS builder RUN apk add --no-cache libc6-compat RUN apk update # Set working directory WORKDIR /app RUN yarn global add turbo COPY . . RUN turbo prune web --docker # Add lockfile and package.json's of isolated subworkspace FROM base AS installer RUN apk add --no-cache libc6-compat RUN apk update WORKDIR /app # First install the dependencies (as they change less often) COPY .gitignore .gitignore COPY --from=builder /app/out/json/ . COPY --from=builder /app/out/yarn.lock ./yarn.lock RUN yarn install # Build the project COPY --from=builder /app/out/full/ . RUN yarn turbo run build --filter=web... FROM base AS runner WORKDIR /app # Don't run production as root RUN addgroup --system --gid 1001 nodejs RUN adduser --system --uid 1001 nextjs USER nextjs COPY --from=installer /app/apps/web/next.config.js . COPY --from=installer /app/apps/web/package.json . # Automatically leverage output traces to reduce image size # https://nextjs.org/docs/advanced-features/output-file-tracing COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./ COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public CMD node apps/web/server.js Remote caching To take advantage of remote caches during Docker builds, you will need to make sure your build container has credentials to access your Remote Cache. There are many ways to take care of secrets in a Docker image. We will use a simple strategy here with multi-stage builds using secrets as build arguments that will get hidden for the final image. Assuming you are using a Dockerfile similar to the one above, we will bring in some environment variables from build arguments right before turbo build: ARG TURBO_TEAM ENV TURBO_TEAM=$TURBO_TEAM ARG TURBO_TOKEN ENV TURBO_TOKEN=$TURBO_TOKEN RUN yarn turbo run build --filter=web... turbo will now be able to hit your remote cache. To see a Turborepo cache hit for a non-cached Docker build image, run a command like this one from your project root: docker build -f apps/web/Dockerfile . --build-arg TURBO_TEAM=“your-team-name” --build-arg TURBO_TOKEN=“your-token“ --no-cache",
      raw_url: "/server/pages/repo/docs/handbook/deploying-with-docker.html",
      excerpt:
        "to <mark>prune</mark> the inputs to the Dockerfile to only what is strictly necessary. Turborepo provides a simple solution - turbo <mark>prune.</mark> turbo <mark>prune</mark> docs --docker Running this command creates a",
      sub_results: [
        {
          title: "Deploying with Docker",
          url: "/_next/static/chunks/server/pages/repo/docs/handbook/deploying-with-docker.html",
          weighted_locations: [
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 328,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 347,
            },
            {
              weight: 0.5,
              balanced_score: 299.92108,
              location: 349,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 357,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 377,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 395,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 524,
            },
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 547,
            },
            {
              weight: 0.5,
              balanced_score: 299.92108,
              location: 616,
            },
          ],
          locations: [328, 347, 349, 357, 377, 395, 524, 547, 616],
          excerpt:
            "to <mark>prune</mark> the inputs to the Dockerfile to only what is strictly necessary. Turborepo provides a simple solution - turbo <mark>prune.</mark> turbo <mark>prune</mark> docs --docker Running this command creates a",
        },
      ],
    },
  },
  {
    id: "en_880cdc0",
    score: 0.24032138,
    words: [188],
    data: {
      url: "/_next/static/chunks/server/pages/repo/docs/handbook.html",
      content:
        "Monorepo Handbook. Now we've covered the core concepts, it's time to get practical. This handbook covers everything you need to know to set up and use your monorepo. Fundamentals Learn about the fundamental building blocks of monorepos - workspaces, packages and dependencies. What is a Monorepo? Understand how a monorepo compares to a polyrepo, and what problems it solves. Package Installation. Learn how to install and manage packages in your monorepo. Workspaces. Understand how workspaces help you develop packages locally. Migrating to a Monorepo. Step-by-step guide on migrating from a multi-repo to a monorepo. Sharing Code. Learn how to share code easily using either internal or external packages. Troubleshooting. Learn the common monorepo pain points, and how to fix them. Tasks Configure common tasks in your monorepo, like linting, testing, and building your apps and packages. Development Tasks. Learn how to set up your dev scripts using Turborepo. Building your App. Get framework-specific guides for building your apps with Turborepo. Linting. Learn how to share linting configs and co-ordinate tasks across your repo. Testing. Configure your integration or end-to-end tests easily. Deploying with Docker. Make use of Turborepo's prune command to keep your Docker deploys fast. Publishing Packages. Bundle, version and publish packages to npm from your monorepo.",
      word_count: 208,
      filters: {},
      meta: {
        title: "Monorepo Handbook",
      },
      anchors: [
        {
          element: "a",
          id: "fundamentals",
          text: "",
          location: 29,
        },
        {
          element: "a",
          id: "tasks",
          text: "",
          location: 121,
        },
      ],
      weighted_locations: [
        {
          weight: 1,
          balanced_score: 1199.6843,
          location: 188,
        },
      ],
      locations: [188],
      raw_content:
        "Monorepo Handbook. Now we've covered the core concepts, it's time to get practical. This handbook covers everything you need to know to set up and use your monorepo. Fundamentals Learn about the fundamental building blocks of monorepos - workspaces, packages and dependencies. What is a Monorepo? Understand how a monorepo compares to a polyrepo, and what problems it solves. Package Installation. Learn how to install and manage packages in your monorepo. Workspaces. Understand how workspaces help you develop packages locally. Migrating to a Monorepo. Step-by-step guide on migrating from a multi-repo to a monorepo. Sharing Code. Learn how to share code easily using either internal or external packages. Troubleshooting. Learn the common monorepo pain points, and how to fix them. Tasks Configure common tasks in your monorepo, like linting, testing, and building your apps and packages. Development Tasks. Learn how to set up your dev scripts using Turborepo. Building your App. Get framework-specific guides for building your apps with Turborepo. Linting. Learn how to share linting configs and co-ordinate tasks across your repo. Testing. Configure your integration or end-to-end tests easily. Deploying with Docker. Make use of Turborepo's prune command to keep your Docker deploys fast. Publishing Packages. Bundle, version and publish packages to npm from your monorepo.",
      raw_url: "/server/pages/repo/docs/handbook.html",
      excerpt:
        "Testing. Configure your integration or end-to-end tests easily. Deploying with Docker. Make use of Turborepo's <mark>prune</mark> command to keep your Docker deploys fast. Publishing Packages. Bundle, version and publish packages",
      sub_results: [
        {
          title: "Monorepo Handbook",
          url: "/_next/static/chunks/server/pages/repo/docs/handbook.html",
          weighted_locations: [
            {
              weight: 1,
              balanced_score: 1199.6843,
              location: 188,
            },
          ],
          locations: [188],
          excerpt:
            "Testing. Configure your integration or end-to-end tests easily. Deploying with Docker. Make use of Turborepo's <mark>prune</mark> command to keep your Docker deploys fast. Publishing Packages. Bundle, version and publish packages",
        },
      ],
    },
  },
].map((elem) => ({
  ...elem,
  data: () =>
    new Promise<PagefindSearchFragment>((resolve) => {
      resolve(elem.data);
    }),
}));
