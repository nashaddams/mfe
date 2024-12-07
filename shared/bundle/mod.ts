import { Command } from "@cliffy/command";
import * as esbuild from "esbuild";
import { denoPlugins } from "@luca/esbuild-deno-loader";

await new Command()
  .option(
    "--entry-points <entryPoints:string[]>",
    "The entry points to bundle.",
    {
      required: true,
    },
  )
  .option(
    "--outfile <outfile:string>",
    "The file to write the bundle to.",
    {
      required: true,
    },
  )
  .action(async ({ entryPoints, outfile }) => {
    await esbuild.build({
      plugins: [...denoPlugins()],
      entryPoints,
      outfile,
      bundle: true,
      minify: true,
      format: "esm",
    });
    await esbuild.stop();
  })
  .parse();
