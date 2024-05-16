#![cfg_attr(
    not(debug_assertions),
    windows_subsystem = "windows"
)]

use tauri::Manager;

#[derive(Clone, serde::Serialize)]
struct Payload {
    args: Vec<String>,
    cwd: String,
}

fn main() {
    let mut builder = tauri::Builder::default();

    builder = builder.setup(|app| {
        let win = app.get_window("main").unwrap();
            
        #[cfg(not(target_os = "linux"))]
        {
            use window_shadows::set_shadow;
            set_shadow(&win, true).unwrap();
        }

        win.show().unwrap();

        Ok(())
    });


    builder.plugin(tauri_plugin_single_instance::init(|app, argv, cwd| {
        println!("{}, {argv:?}, {cwd}", app.package_info().name);

        app.emit_all("single-instance", Payload { args: argv, cwd }).unwrap();
    }))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}