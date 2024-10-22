import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
// import { wrapperEnv } from "./build/utils";
import { resolve } from "path";
import { createHtmlPlugin } from "vite-plugin-html"

export default ({ mode }) => {
  const root = process.cwd();
	const env = loadEnv(mode, root);
	console.log(11111,env)
	console.log(2222,process.env.NODE_RUN)
	const NODE_RUN =process.env.NODE_RUN
  const {
    VITE_BASE_URL,
  } = env;
  return defineConfig({
		base:NODE_RUN=='local'?'/':env.VITE_BRAND=='A'?'/A':'/B',
    plugins: [
      vue(),
			createHtmlPlugin({
				inject: {
					data: {
						title:env.VITE_PAGE_TITLE ,
					},
				},
			})
    ],
    resolve: {
      // ↓路径别名
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    server: {
			// Listening on all local IPs
			open:true,
      host: true,
      https: false,
      port:8088,
    },
    build: {
      sourcemap: false, // 打包后是否生成 source map 文件
    },
    css: {
      preprocessorOptions: {
        scss: {
            api: 'modern-compiler', // or 'modern'/// 去除sass的警告
        },
      },
    },
  });
};
